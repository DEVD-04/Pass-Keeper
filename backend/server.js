const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require("body-parser");
const { Result } = require('postcss');
const cors= require('cors')

dotenv.config()


// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'pass-keeper';
const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors())

client.connect()



// console.log(process.env.MONGO_URI) 

//get all passwords
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  res.json(findResult)
})

//save a password
app.post('/', async(req, res) => {
    const data=req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(data);
    console.log('Found documents =>', findResult);
    res.send({success: true, result: findResult})
})

//delete a password
app.delete('/', async(req, res) => {
    const data=req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(data);
    console.log('Found documents =>', findResult);
    res.send({success: true, result: findResult})
})

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})