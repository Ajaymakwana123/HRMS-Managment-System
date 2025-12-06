import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";


const Dashboard = () => {

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

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userData"));
        setUser(savedUser);
    }, []);

    return (
        <div>
            <div className='items-center mt-8 flex flex-row justify-between pe-10 bg-white'>
                <div className='ml-50 font-medium flex gap-6 cursor-pointer'>
                    <a className='border-b-3 border-md border-[#FFC20E]' href="#">Dashboard</a>
                    <a href="#">Requests</a>
                    <a href="#">Payroll</a>
                    <a href="#">Company</a>
                    <a href="#">Extras</a>
                </div>

                <div className='flex gap-4 items-center'>
                    <img className='h-12' src="./notifi.png" alt="" />
                    <img className='h-12' src="./msg.png" alt="" />
                    <img className='h-12 p-1' src="./profile.png" alt="" />
                </div>
            </div>
            <div className='bg-[#E3EDF9] relative'>
                <h1 className='ml-10 pt-3 text-[#253D90]'>Dashboard</h1>
                <div className='mt-3 bg-[#253D90] rounded-xl ml-5 mr-5 flex relative'>
                    <img className='ml-4 mt-6 mb-6 h-20 w-20 b-2' src="./profile.png" alt="" />
                    <div className='flex flex-col justify-center text-white ml-4'>
                        <h1 className='text-xl'>{user ? `${user.firstName} ${user.lastName}` : "User"}</h1>
                        <h1 className='text-md'>UI / UX Designer & UX Writer</h1>
                    </div>
                    <button className='text-shadow-md right-30 top-14 absolute h-fit p-[.45vw] rounded-md bg-[#FFC20E] pl-6 pr-6'>Edit Profile</button>
                    <img className='mt-2 h-28 right-0 absolute' src="./imgleft.png" alt="" />
                </div>
                <h1 className='text-black ml-8 mt-5 font-semibold'>Quick Actions</h1>
                <div className='flex flex-row mt-5 ml-20 mr-20 pb-5 justify-between'>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>Apply for Leave</h1>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>KPI Goals</h1>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>Take Appraisal</h1>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>View Payslip</h1>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>Update Profile</h1>
                    <h1 className='shadow-md pl-8 pr-8 p-2 bg-white rounded-4xl'>Events</h1>
                </div>


                <div className='flex flex-row w-full'>

                    {/* Availabe leave */}
                    <div className="leave-card shadow-md bg-white p-5 rounded-xl m-5 w-1/2 flex flex-col">
                        <div className="leave-title-row flex-row justify-between flex">
                            <h3 className='text-xl font-bold'>Available Leave Days</h3>
                            <HiDotsVertical />
                        </div>

                        {leaves.map((l, index) => (
                            <div key={index} className="mb-5 mt-4">
                                <div className="flex justify-between text-md font-medium text-gray-700 mb-1">
                                    <span>{l.title}</span>
                                    <span>{l.used} of {l.total} day(s)</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-[12px] bg-gray-300 rounded-md overflow-hidden">
                                    <div
                                        className="h-full bg-[#1E3A8A] transition-all duration-500"
                                        style={{ width: `${(l.used / l.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* To-do List */}
                    <div className='w-1/2 shadow-md flex flex-col bg-white p-5 rounded-xl m-5'>
                        <div className="rounded-xl">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold">To-dos</h3>
                                <span className="text-2xl cursor-pointer font-semibold">⋮</span>
                            </div>

                            <div className="mt-3 space-y-3">
                                {todos.map((task, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-[#DDE9F8] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#cfdff4] transition"
                                    >
                                        <span className="font-medium text-gray-700 text-[15px]">{task}</span>
                                        <span className="text-xl text-gray-600">▾</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full'>
                    {/* Announcements */}
                    <div className='w-1/2 shadow-md flex flex-col bg-white p-5 rounded-xl m-5'>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">Announcement(s)</h3>
                            <span className="text-2xl cursor-pointer font-semibold">⋮</span>
                        </div>
                        <div className="mt-3 space-y-3">
                            {[
                                "Welcome saron - We have a new staff joining us",
                                "Sendforth for Project Manager : Kindly gather at the meeting hall",
                                "Marriage Alert",
                                "Office Space Update"
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center bg-[#DDE9F8] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#cfdff4] transition"
                                >
                                    <span className="font-medium text-gray-700 text-[15px]">{item}</span>
                                    <span className="text-xl text-gray-600">▾</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* April Pay Slip Breakdown */}
                    <div className='w-1/2 shadow-md flex flex-col bg-white p-5 rounded-xl m-5'>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">April Pay slip breakdown</h3>
                            <span className="text-2xl cursor-pointer font-semibold">⋮</span>
                        </div>

                        <table className="w-full mt-4 text-[15px]">
                            <thead>
                                <tr className="bg-[#DDE9F8] rounded-lg">
                                    <th className="py-2 text-left pl-3">Earnings</th>
                                    <th className="py-2 text-left">Amount</th>
                                    <th className="py-2 text-left">Deductions</th>
                                    <th className="py-2 text-left">Total</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-700">
                                <tr className="border-b">
                                    <td className="py-2 pl-3">Basic Wage</td>
                                    <td>150,000</td>
                                    <td>-30,000</td>
                                    <td>120,000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 pl-3">Tax</td>
                                    <td>15,000</td>
                                    <td>-3,000</td>
                                    <td>12,000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 pl-3">Pension</td>
                                    <td>15,000</td>
                                    <td>-3,000</td>
                                    <td>12,000</td>
                                </tr>
                                <tr className="font-bold">
                                    <td className="py-2 pl-3">Total Earnings</td>
                                    <td>150,000</td>
                                    <td>-36,000</td>
                                    <td>114,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


                <div className="w-1/2 shadow-md flex flex-col bg-white p-6 rounded-xl m-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">Birthdays</h3>
                        <span className="text-2xl cursor-pointer font-semibold">⋮</span>
                    </div>

                    {/* List */}
                    <div className="mt-4 space-y-3">
                        {birthdays.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#DDE9F8] rounded-lg px-4 py-2 flex items-center justify-between"
                            >
                                {/* Left: icon + text */}
                                <div className="flex items-center gap-4">
                                    <FaCalendarAlt className="text-[#1E3A8A] text-xl" />
                                    <div className="flex flex-col leading-5">
                                        <span className="font-semibold capitalize">
                                            {item.name}
                                        </span>
                                        <span className="text-sm text-gray-600">{item.date}</span>
                                    </div>
                                </div>

                                {/* Right: action button */}
                                {!sent[index] ? (
                                    <button
                                        onClick={() => handleSend(index)}
                                        className="bg-[#FFC20E] hover:bg-[#e6ae0d] transition font-semibold px-4 py-2 rounded-lg shadow"
                                    >
                                        Send Wishes
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-1 bg-[#3F861E] text-white font-semibold px-3 py-2 rounded-lg shadow">
                                        <FaRegCheckCircle /> Wishes Sent
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
