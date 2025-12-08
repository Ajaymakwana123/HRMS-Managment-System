import React, { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5"
import { PiCaretUpDownFill } from "react-icons/pi";

import NavPart from "./NavPart";

const AdminDashboard = () => {

    const birthdays = [
        { name: "biruk kidan’s Day – April", date: "25th" },
        { name: "biruk kidan’s Day – April", date: "25th" },
        { name: "biruk kidan’s Day – April", date: "25th" },
        { name: "biruk kidan’s Day – April", date: "25th" },
        { name: "biruk kidan’s Day – April", date: "25th" },
    ];

    const [sent, setSent] = useState(() => {
        const stored = localStorage.getItem("sentWishes");
        return stored ? JSON.parse(stored) : Array(birthdays.length).fill(false);
    });

    const handleSend = (index) => {
        const updated = [...sent];
        updated[index] = true;
        setSent(updated);
        localStorage.setItem("sentWishes", JSON.stringify(updated));
    };


    const leaves = [
        { title: "Annual", used: 10, total: 60 },
        { title: "Sick Leave", used: 0, total: 10 },
        { title: "Compassionate", used: 8, total: 15 }
    ];

    const todos = [
        "Complete Onboarding Document Upload",
        "Follow up on clients on documents",
        "Design wireframes for LMS",
        "Create case study for next IT project",
        "Follow up on clients on documents",
    ];

    const [user, setUser] = useState(null);
    const navigator = useNavigate();

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userData"));
        setUser(savedUser);
    }, []);

    return (
        <div className="flex justify-between h-full w-full">

            {/* LEFt */}
            <div className=" bg-[#121C3E]">
                <div className="px-6 p-4 text-white">
                    <img className="w-30" src="./logo.png" alt="" />

                    <div className='mt-1 flex'>
                        <img className='mt-3 mb-6 h-20 w-20 b-2' src="./profile.png" alt="" />
                        <div className='flex flex-col justify-center text-white ml-4'>
                            <h1 className='text-sm mb-1'>{user ? `${user.firstName} ${user.lastName}` : "User"}</h1>
                            <h1 className='text-xl'>Admin</h1>
                        </div>
                    </div>

                    <h1 className="ml-5">Features</h1>

                    <div className="mt-2 items-center flex pl-4 py-3 bg-[#FFC20E] rounded-xl shadow-md">
                        <img className="w-8 object-contain" src="./assets/dash1.png" alt="" />
                        <h1 className="ml-3.5 text-black">Dashboard</h1>
                    </div>

                    <div className="items-center mt-1 flex pl-4 py-3 rounded-xl">
                        <img className="w-8 object-contain" src="./assets/dash2.png" alt="" />
                        <h1 className="ml-3.5 text-white">Messages</h1>
                    </div>

                    <h1 className="mt-5 ml-5">Recruitment</h1>

                    <div className="mt-2 flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash3.png" alt="" />
                        <h1 className="ml-3.5 text-white">Jobs</h1>
                    </div>

                    <div className="flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash4.png" alt="" />
                        <h1 className="ml-3.5 text-white">Candidates</h1>
                    </div>
                    <div className="flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash5.png" alt="" />
                        <h1 className="ml-3.5 text-white">Resumes</h1>
                    </div>

                    <h1 className="mt-5 ml-5">Organization</h1>

                    <div className="mt-2 flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash6.png" alt="" />
                        <h1 className="ml-3.5 text-white">Employee Management</h1>
                    </div>

                    <div className="flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash7.png" alt="" />
                        <h1 className="ml-3.5 text-white">Leave Management</h1>
                    </div>
                    <div className="flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash8.png" alt="" />
                        <h1 className="ml-3.5 text-white">Performance Management</h1>
                    </div>

                    <h1 className="mt-5 ml-5">KRIS Pay</h1>

                    <div className="mt-2 flex pl-4 py-3 rounded-xl items-center">
                        <img className="w-8 object-contain" src="./assets/dash9.png" alt="" />
                        <h1 className="ml-3.5 text-white">Payroll Management</h1>
                    </div>
                </div>

                <button className="flex items-center gap-2 w-fit m-3 bg-[#FF0000] shadow-md text-white px-30 py-2 rounded-xl"><FaPowerOff />                    Log Out</button>
                <img className="mt-1 w-full" src="./assets/dash10.png" alt="" />
            </div>

            {/* RIGHT */}
            <div className="w-full bg-[#E3EDF9]">

                <div className="flex justify-between px-3 items-center pt-3">
                    <RiMenu2Line className="left-5 h-8 w-fit" />

                    <div className="bg-white rounded-2xl flex items-center">
                        <div className="flex items-center gap-2 bg-[#1f3a93] text-white font-semibold px-5 py-3 rounded-l-2xl cursor-pointer">
                            {"selected"}
                            <span>▾</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 h-full bg-white outline-none px-5 text-gray-500 text-lg"
                        />
                        <IoSearch className="text-gray-400 text-2xl mr-4 cursor-pointer" />
                    </div>

                    <div className='flex gap-2 items-center justify-center'>
                        <img className='h-12' src="./notifi.png" alt="" />
                        <img className='h-12' src="./icseting.png" alt="" />
                        <img className='h-12' src="./msg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard
