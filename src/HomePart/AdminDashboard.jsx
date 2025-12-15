import React, { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5"
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const AdminDashboard = () => {

    const [showSidebar, setShowSidebar] = useState(true);

    const appliedJobs = [
        { title: "Sales Executive", company: "Access Bank", time: "20mins ago", logo: "./access.png" },
        { title: "User Experience Designer", company: "Paystack", time: "10mins ago", logo: "./paystack.png" },
        { title: "Product Manager", company: "T-Pay", time: "5mins ago", logo: "./tpay.png" },
    ];

    const candidates = [
        { name: "Even Tesfaye", role: "Applied for : backend Engineer", pic: "./user1.png" },
        { name: "Yanet mekurya", role: "Applied for : Sales", pic: "./user2.png" },
        { name: "Aman beyene", role: "Applied for : Product Manager", pic: "./user3.png" },
    ];

    const joyss = [
        { name: "Aman", role: "Product Manager", pic: "./user1.png" },
        { name: "Gelila", role: "Sales Executive", pic: "./user2.png" },
        { name: "Biruk", role: "UI UX Designer", pic: "./user3.png" }
    ];

    const payrolls = [
        { name: "Aman", salary: "30,000 Birr", pic: "./user1.png", status: "Paid" },
        { name: "Gelila", salary: "50,000 Birr", pic: "./user2.png", status: "Processing" },
        { name: "Biruk", salary: "40,000 Birr", pic: "./user3.png", status: "Processing" },
    ];

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userData"));
        setUser(savedUser);
    }, []);

    return (
        <div className="flex justify-between h-full w-full">

            {/* LEFt */}
            <div className={`bg-[#121C3E] transition-all duration-300 
    ${showSidebar ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
                <div className="p-4 text-white">
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

                <button className="flex items-center gap-1 w-fit mx-3 mb-2 bg-[#FF0000] shadow-md text-white px-22 py-2 rounded-xl"><FaPowerOff />                    Log Out</button>
                <img className="mt-1 w-full" src="./assets/dash10.png" alt="" />
            </div>

            {/* RIGHT */}
            <div className="w-full bg-[#E3EDF9]">

                <div className="flex justify-between px-3 items-center pt-3">
                    <RiMenu2Line
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="left-5 h-8 w-fit cursor-pointer"
                    />


                    <div className="bg-white rounded-2xl flex items-center">
                        <div className="flex items-center gap-2 bg-[#1f3a93] text-white font-semibold px-5 py-3 rounded-l-2xl cursor-pointer">
                            {"Selected"}
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

                <h1 className="text-black font-bold ml-6 mt-6">Dashboard</h1>
                <div className="flex mt-4 whitespace-nowrap overflow-x-hidden">
                    <div className="min-w-44 shadow-sm rounded-xl mx-2 items-center flex px-4 py-4 bg-[#FFC20E]">
                        <img className="w-12 rotate-[-3deg] filter: brightness-0" src="./assets/dash2.png" alt="" />
                        <div className="ml-5 flex flex-col items-center">
                            <h1 className="-mb-1 font-extrabold text-xl">4</h1>
                            <h1 className="font-bold text-md">Messages</h1>
                        </div>
                    </div>

                    <div className="min-w-44 text-white shadow-sm rounded-xl mx-2 items-center flex px-4 py-4 bg-[#253D90]">
                        <img className="w-12 rotate-[-3deg]" src="./assets/dash3.png" alt="" />
                        <div className="ml-5 flex flex-col items-center">
                            <h1 className="-mb-1 font-extrabold text-xl">1</h1>
                            <h1 className="font-bold text-md">Jobs</h1>
                        </div>
                    </div>

                    <div className="text-white min-w-44 shadow-sm rounded-xl mx-2 items-center flex px-4 py-4 bg-[#3F861E]">
                        <img className="w-12 rotate-[-2deg]" src="./assets/dash4.png" alt="" />
                        <div className="ml-5 flex flex-col items-center">
                            <h1 className="-mb-1 font-extrabold text-xl">30</h1>
                            <h1 className="font-bold text-md">Candidates</h1>
                        </div>
                    </div>

                    <div className="text-white min-w-44 shadow-sm rounded-xl mx-2 items-center flex px-4 py-4 bg-[#232423]">
                        <img className="w-8 rotate-[-3deg]" src="./assets/dash5.png" alt="" />
                        <div className="ml-5 flex flex-col items-center">
                            <h1 className="-mb-1 font-extrabold text-xl">2</h1>
                            <h1 className="font-bold text-md">Resumes</h1>
                        </div>
                    </div>

                    <div className="min-w-44 shadow-sm rounded-xl mx-2 items-center flex px-4 py-4 bg-[#FFC20E]">
                        <img className="w-12 rotate-[-3deg] filter: brightness-0" src="./assets/dash6.png" alt="" />
                        <div className="ml-5 flex flex-col items-center">
                            <h1 className="-mb-1 font-extrabold text-xl">20</h1>
                            <h1 className="font-bold text-md">Employees</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-1 mt-3 items-center w-full">
                    {/* Applied Jobs */}
                    <Card title="Applied Jobs">
                        {appliedJobs.map((job, i) => (
                            <div key={i} className="bg-[#E3EDF9] p-3 rounded-lg flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                    <img src={job.logo} className="w-10 h-10" />
                                    <div>
                                        <p className="font-semibold">{job.title}</p>
                                        <p className="text-sm text-gray-600">{job.company}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">{job.time}</span>
                            </div>
                        ))}
                    </Card>

                    {/* Employees */}
                    <Card title="Employees">
                        {joyss.map((emp, i) => (
                            <div key={i} className="bg-[#E3EDF9] p-3 rounded-lg flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                    <img src={emp.pic} className="w-10 h-10" />
                                    <div>
                                        <p className="font-semibold">{emp.name}</p>
                                        <p className="text-sm text-gray-600">Role : {emp.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="bg-green-600 text-white text-sm p-2 rounded-md flex items-center gap-1"><FaEye />View</button>
                                    <button className="bg-blue-700 text-white text-sm p-2 rounded-md flex items-center gap-1"><FaDownload />Download</button>
                                </div>
                            </div>
                        ))}
                    </Card>

                    {/* Candidates */}
                    <Card title="Candidates">
                        {candidates.map((c, i) => (
                            <div key={i} className="bg-[#E3EDF9] p-3 rounded-lg flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                    <img src={c.pic} className="w-10 h-10" />
                                    <div>
                                        <p className="font-semibold">{c.name}</p>
                                        <p className="text-sm text-gray-600">{c.role}</p>
                                    </div>
                                </div>
                                <button className="bg-green-600 text-white p-2 rounded-md flex items-center gap-1"><FaEye />View</button>
                            </div>
                        ))}
                    </Card>

                    {/* Payrolls */}
                    <Card title="April Payrolls">
                        {payrolls.map((p, i) => (
                            <div key={i} className="bg-[#E3EDF9] p-3 rounded-lg mb-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src={p.pic} className="w-10 h-10" />
                                        <div>
                                            <p className="font-semibold">{p.name}</p>
                                            <p className="text-sm text-gray-600">Salary Amount : {p.salary}</p>
                                        </div>
                                    </div>
                                    <span className={`px-4 text-white rounded-md p-2 text-sm 
                ${p.status === "Paid" ? "bg-green-700" : "bg-yellow-600"}`}>
                                        {p.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        </div>
    )
}

const Card = ({ title, children }) => (
    <div className="bg-white p-4 m-2 rounded-xl shadow-sm border-[#DDEAFF] border">
        <div className="flex justify-between mb-5">
            <h3 className="font-bold text-[17px]">{title}</h3>
            <span className="font-bold">⋮</span>
        </div>
        {children}
    </div>
);
export default AdminDashboard
