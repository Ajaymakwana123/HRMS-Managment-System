import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaCog } from "react-icons/fa";
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
        { name: "Abenezer kebede", duration: 5, start: "22/04/2022", end: "28/04/2022", type: "Sick", reason: "Personal" },
        { name: "Abenezer kebede", duration: 5, start: "22/04/2022", end: "28/04/2022", type: "Sick", reason: "Personal" },
        { name: "Abenezer kebede", duration: 5, start: "22/04/2022", end: "28/04/2022", type: "Sick", reason: "Personal" },
    ];


    return (
        <div className='w-full'>
           <NavPart />
            <div className='bg-[#E3EDF9] w-full p-2'>
                <div className='bg-white m-5 p-4'>
                    <h1>Dashboard > Apply for Leave</h1>
                </div>
                <div className='flex flex-col m-5 bg-white'>
                    <div className='m-6 flex items-center gap-3'>
                        <img className='w-8' src="./bookopen.png" alt="" />
                        <h1>Leave Application</h1>
                    </div>
                    <div className='flex flex-row gap-4 mx-5'>
                        {leavedetail.map((l, indx) => (
                            <div key={indx} className='bg-[#253D90] rounded-xl px-4 py-3 flex flex-row items-center'>
                                <h1 className='text-4xl font-bold text-center rounded-full bg-white p-3.5 text-[#253D90]'>{l.numb}</h1>
                                <div className='flex flex-col ml-5 mr-8'>
                                    <h1 className='text-white'>{l.name}</h1>
                                    <button onClick={() => navigate(l.navs)} className='w-fit mt-0.5 px-6 py-0.5 rounded-2xl bg-[#FFC20E]'>{l.isapply ? "Applied" : "Apply"}</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Leav Details */}
                    <div className='mx-6 mt-5 flex flex-row justify-between text-black'>
                        <h1 className='font-bold text-2xl'>Leave History</h1>
                        <div className='flex items-center gap-8'>
                            <FaFilter />
                            <button className='text-white flex flex-row items-center gap-2 px-6 py-2 rounded-xl bg-[#3F861E]'>Export <IoMdArrowDropdownCircle />
                            </button>
                        </div>
                    </div>
                    <div className="rounded-xl px-2 py-2 mx-6">
                        <table className="w-full text-[15px]">
                            <thead>
                                <tr className="bg-[#DDE9F8] h-14 text-left font-semibold">
                                    <th className="py-2 px-3">Name(s)</th>
                                    <th className="py-2 px-3">Duration(s)</th>
                                    <th className="py-2 px-3">Start Date</th>
                                    <th className="py-2 px-3">End Date</th>
                                    <th className="py-2 px-3">Type</th>
                                    <th className="py-2 px-3">Reason(s)</th>
                                    <th className="py-2 px-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {leaves.map((item, index) => (
                                    <tr key={index} className="border-b border-[#ededed] hover:bg-[#E7F0FF] transition">
                                        <td className="px-3 py-3">{item.name}</td>
                                        <td className="px-3 py-3">{item.duration}</td>
                                        <td className="px-3 py-3">{item.start}</td>
                                        <td className="px-3 py-3">{item.end}</td>
                                        <td className="px-3 py-3">{item.type}</td>
                                        <td className="px-3 py-3">{item.reason}</td>
                                        <td className="px-3 py-3">
                                            <button className="flex items-center gap-2 bg-[#253D90] hover:bg-[#1f3276] transition text-white text-sm font-semibold px-4 py-1 rounded-md shadow">
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
    )
}

export default Applyforleave
