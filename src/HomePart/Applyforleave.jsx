import React from 'react';
import { FaFilter, FaCog } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import NavPart from './NavPart';

const Applyforleave = () => {
    const navigate = useNavigate();

    const leavedetail = [
        { name: "Annual Leave", numb: "60", isapply: false, navs: "/leave" },
        { name: "Sick Leave", numb: "20", isapply: false, navs: "/leave" },
        { name: "Maternity Leave", numb: "40", isapply: true, navs: "/leave" },
        { name: "Compassionate Leave", numb: "30", isapply: true, navs: "/leave" }
    ];

    const leaves = [
        { name: "Abenezer kebede", duration: 5, start: "22/04/2022", end: "28/04/2022", type: "Sick", reason: "Personal" },
        { name: "Abenezer kebede", duration: 7, start: "22/04/2022", end: "30/04/2022", type: "Exam", reason: "Examination" },
        { name: "Abenezer kebede", duration: 120, start: "22/04/2022", end: "28/06/2022", type: "Maternity", reason: "Child Care" },
        { name: "Abenezer kebede", duration: 5, start: "22/04/2022", end: "28/04/2022", type: "Sick", reason: "Personal" }
    ];

    return (
        <div className="w-full min-h-screen">
            <NavPart />

            <div className="bg-[#E3EDF9] p-4 md:p-6">
                {/* Breadcrumb */}
                <div className="bg-white p-4 rounded-lg shadow mb-5">
                    <h1 className="text-sm md:text-base font-medium">
                        Dashboard &gt; Apply for Leave
                    </h1>
                </div>

                <div className="bg-white rounded-xl shadow p-5 md:p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <img className="w-8" src="./bookopen.png" alt="" />
                        <h1 className="text-lg md:text-xl font-bold">
                            Leave Application
                        </h1>
                    </div>

                    {/* Leave Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {leavedetail.map((l, indx) => (
                            <div
                                key={indx}
                                className="bg-[#253D90] rounded-xl p-4 flex items-center"
                            >
                                <div className="text-3xl font-bold bg-white text-[#253D90] rounded-full w-14 h-14 flex items-center justify-center">
                                    {l.numb}
                                </div>

                                <div className="ml-4 flex flex-col">
                                    <h1 className="text-white text-sm md:text-base">
                                        {l.name}
                                    </h1>
                                    <button
                                        onClick={() => navigate(l.navs)}
                                        className={`mt-1 w-fit px-4 py-0.5 rounded-2xl text-sm font-semibold
                                            ${l.isapply ? "bg-gray-300 text-black" : "bg-[#FFC20E]"}
                                        `}
                                    >
                                        {l.isapply ? "Applied" : "Apply"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Leave History Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <h1 className="font-bold text-xl md:text-2xl">
                            Leave History
                        </h1>

                        <div className="flex items-center gap-5">
                            <FaFilter className="cursor-pointer" />
                            <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#3F861E] text-white font-semibold">
                                Export <IoMdArrowDropdownCircle />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-[900px] w-full text-sm md:text-[15px]">
                            <thead>
                                <tr className="bg-[#DDE9F8] h-12 text-left font-semibold">
                                    <th className="px-3">Name</th>
                                    <th className="px-3">Duration</th>
                                    <th className="px-3">Start Date</th>
                                    <th className="px-3">End Date</th>
                                    <th className="px-3">Type</th>
                                    <th className="px-3">Reason</th>
                                    <th className="px-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {leaves.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-[#E7F0FF] transition"
                                    >
                                        <td className="px-3 py-3">{item.name}</td>
                                        <td className="px-3 py-3">{item.duration}</td>
                                        <td className="px-3 py-3">{item.start}</td>
                                        <td className="px-3 py-3">{item.end}</td>
                                        <td className="px-3 py-3">{item.type}</td>
                                        <td className="px-3 py-3">{item.reason}</td>
                                        <td className="px-3 py-3">
                                            <button className="flex items-center gap-2 bg-[#253D90] text-white text-sm font-semibold px-4 py-1 rounded-md hover:bg-[#1f3276]">
                                                Actions <FaCog />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applyforleave;
