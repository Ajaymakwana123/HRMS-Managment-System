import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavPart from '../HomePart/NavPart';

const AnnualLeave = () => {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setOpenModal(false);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#E3EDF9]">
            <NavPart />

            <div className="p-4 md:p-6">
                {/* Breadcrumb */}
                <div className="bg-white p-4 rounded-lg shadow mb-5">
                    <h1 className="text-sm md:text-base font-medium">
                        Dashboard &gt; Apply for Leave &gt; Annual Leave
                    </h1>
                </div>

                {/* FORM CARD */}
                <div className="bg-white rounded-xl shadow p-5 md:p-8 max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 justify-center">
                        <img src="/images/bookopen.png" className="w-9" alt="" />
                        <h1 className="font-bold text-xl md:text-2xl">Leave Application</h1>
                    </div>

                    <p className="text-center mt-2 font-medium text-sm md:text-base">
                        Fill the required fields below to apply for annual leave.
                    </p>

                    {/* FORM */}
                    <div className="mt-6 space-y-5">
                        {/* Leave Type */}
                        <div>
                            <label className="font-medium">Leave Type</label>
                            <input
                                className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                type="text"
                            />
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium">Start Date</label>
                                <input
                                    className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                    type="date"
                                />
                            </div>

                            <div>
                                <label className="font-medium">End Date</label>
                                <input
                                    className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                    type="date"
                                />
                            </div>
                        </div>

                        {/* Duration / Resumption */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium">Duration</label>
                                <input
                                    className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                    type="number"
                                />
                            </div>

                            <div>
                                <label className="font-medium">Resumption Date</label>
                                <input
                                    className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                    type="date"
                                />
                            </div>
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="font-medium">Reason for leave</label>
                            <input
                                className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                type="text"
                            />
                        </div>

                        {/* File */}
                        <div>
                            <label className="font-medium">
                                Attach handover document
                            </label>
                            <input
                                className="w-full mt-1 p-2 rounded bg-[#E3EDF9]"
                                type="file"
                            />
                        </div>

                        {/* Relief Officer */}
                        <div>
                            <label className="font-medium">Select your relief officer</label>
                            <select className="w-full mt-1 p-2 rounded bg-[#E3EDF9]">
                                <option>Personal</option>
                                <option>Work</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => setOpenModal(true)}
                                className="sm:w-1/3 bg-[#3F861E] text-white p-2 rounded-md font-semibold"
                            >
                                Submit
                            </button>

                            <button
                                className="sm:w-1/3 border-2 border-red-500 text-red-500 p-2 rounded-md font-semibold"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {openModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-[90%] max-w-sm text-center">
                        <img src="/images/thumb.png" className="w-24 mx-auto" alt="" />
                        <h1 className="text-xl font-bold text-[#0049FF] mt-4">
                            Great Job!
                        </h1>
                        <p className="mt-2 font-semibold text-gray-700">
                            Your leave application <br /> would be reviewed
                        </p>

                        <button
                            onClick={handleSubmit}
                            className="mt-6 bg-[#0049FF] text-white w-full py-2 rounded-lg font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnnualLeave;
