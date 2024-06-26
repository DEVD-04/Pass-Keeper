import React from "react";

export default function Navbar(){
    return (
        <nav className="bg-slate-800 text-white">
            <div className="mycontainer flex justify-between items-center px-5 py-1 h-15">
            <div className="logo font-bold text-2xl">
                <span className="text-blue-300">Pass...Keeper</span>
            </div>
            
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <button className="text-white">
                <img src="public/git2.png" alt="" />
            </button>
            </a>
            </div>
        </nav>
    )
}

