import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function NavPart() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="flex items-center justify-between px-4 md:px-8 py-3">

                {/* LOGO / LEFT */}
                <h1 className="font-bold text-lg text-[#253D90]">
                    HR Dashboard
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6 font-medium">
                    <a className="border-b-2 border-[#FFC20E]" href="/dashboard">Dashboard</a>
                    <a href="#">Requests</a>
                    <a href="#">Payroll</a>
                    <a href="#">Company</a>
                    <a href="#">Extras</a>
                </div>

                {/* RIGHT ICONS */}
                <div className="hidden md:flex gap-4 items-center">
                    <img className="h-9 cursor-pointer" src="/images/notifi.png" alt="notification" />
                    <img className="h-9 cursor-pointer" src="/images/msg.png" alt="message" />
                    <img className="h-9 cursor-pointer rounded-full" src="/images/profile.png" alt="profile" />
                </div>

                {/* MOBILE MENU ICON */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col gap-4 px-6 py-4 font-medium">
                        <a className="border-b-2 border-[#FFC20E] w-fit" href="#">Dashboard</a>
                        <a href="#">Requests</a>
                        <a href="#">Payroll</a>
                        <a href="#">Company</a>
                        <a href="#">Extras</a>

                        <div className="flex gap-4 pt-3 border-t">
                            <img className="h-8" src="/images/notifi.png" alt="" />
                            <img className="h-8" src="/images/msg.png" alt="" />
                            <img className="h-8 rounded-full" src="/images/profile.png" alt="" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavPart;
