# Pass-Keeper - Password Manager

## Overview
Pass-Keeper is a secure and user-friendly password manager application built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. It allows users to store and manage their passwords efficiently while ensuring data security.

## Link : https://main--verdant-moonbeam-d6ee4d.netlify.app/

## Features
- Secure password storage using **MongoDB**
- User authentication and authorization
- Intuitive user interface built with **React** and **Tailwind CSS**
- Backend logic implemented using **Express.js** for enhanced security
- Encrypted storage for added protection

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB
- Git


### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Future Enhancements
- Password strength indicator
- Multi-factor authentication (MFA)
- Export and import password data
- Dark mode UI support


