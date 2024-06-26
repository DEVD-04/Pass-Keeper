import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);


    useEffect(() => {
        let passwords = localStorage.getItem("password")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const showPassword = () => {
        // passwordRef.current.type="text"
        if (ref.current.src.includes("eyecross.png")) {
            ref.current.src = "public/eye1.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "public/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {

        if (!form.site || !form.username || !form.password) {
            toast('All fields are required!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return;
        }
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
        // console.log([...passwordArray, form]);
        setForm({ site: "", username: "", password: "" }); // Reset form
    }

    const copyContent = (c) => {
        navigator.clipboard.writeText(c);
        // alert("Copied to clipboard!");
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="mycontainer">
                <h1 className="text-blue-800 text-4xl font-bold text-center">Pass...Keeper</h1>
                <p className="text-red-800 font-bold text-center">Keep your secrets more secret!!!</p>

                <div className="flex flex-col items-center p-4 gap-5">

                    <input type="text" name="site" id="" value={form.site} placeholder="Website URL"
                        onChange={handleChange}
                        className="rounded-lg border border-slate-400 w-full p-4 py-1" />
                    <div className="flex w-full justify-between gap-5">

                        <input type="text" name="username" id="" value={form.username} placeholder="Username"
                            onChange={handleChange}
                            className="rounded-lg border border-slate-400 w-full p-4 py-1" />
                        <div className="relative">

                            <input ref={passwordRef} type="password" name="password" id="" value={form.password} placeholder="Password"
                                onChange={handleChange}
                                className="rounded-lg border border-slate-400 w-full p-4 py-1" />
                            <span className="absolute right-0 top-0 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className="p-2" src="public/eye1.png" alt="" width={35} />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword}
                        className="flex justify-center font-bold items-center bg-blue-400 rounded-full gap-2 py-2 px-5 w-fit hover:bg-blue-300">
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4 ">Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords Saved</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className="bg-cyan-400">
                            <tr>
                                <th className="py-2">Site</th>
                                <th className="py-2">Username</th>
                                <th className="py-2">Password</th>
                            </tr>
                        </thead>
                        <tbody className="bg-cyan-100 ">
                            {passwordArray.map((p, index) => {
                                return <tr key={index}>
                                    <td className="py-2 border border-white">
                                        <div className="flex gap-3 items-center justify-center">
                                            <a href={p.site} target="_blank">{p.site}</a>
                                            <img src="public/copy2.png" alt="" className="h-4 w-4 cursor-pointer"
                                                onClick={() => copyContent(p.site)} />
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white">
                                        <div className="flex gap-3 items-center justify-center">
                                            {p.username}
                                            <img src="public/copy2.png" alt="" className="h-4 w-4 cursor-pointer"
                                                onClick={() => copyContent(p.username)} />
                                        </div>
                                    </td>
                                    <td className="py-2 border border-white">
                                        <div className="flex gap-3 items-center justify-center">
                                            {p.password}
                                            <img src="public/copy2.png" alt="" className="h-4 w-4 cursor-pointer"
                                                onClick={() => copyContent(p.password)} />
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                    }
                </div>
            </div>


        </>
    )
}

export default Manager;