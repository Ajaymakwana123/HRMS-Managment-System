import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavPart from '../HomePart/NavPart';

const AnnualLeave = () => {
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setOpenModal(false);
        navigate('/dashboard');
    }

    return (
        <div>
            <NavPart />

            <div className='bg-[#E3EDF9] p-2'>
                <div className='bg-white m-5 p-4'>
                    <h1>Dashboard > Apply for Leave > Annual Leave</h1>
                </div>
                <div className='flex flex-col m-5 bg-white items-center w-[85%] justify-center'>
                    <div className='m-6 flex items-center gap-3.5'>
                        <img className='w-9' src="./bookopen.png" alt="" />
                        <h1 className='font-bold text-2xl'>Leave Application</h1>
                    </div>
                    <h1 className='-mt-3 font-semibold'>Fill the required fields below to apply for annual leave.</h1>
                    <div className='mt-5 flex flex-col w-[75%] mb-3'>
                        <h1>Leave Type</h1>
                        <input
                            name="email"
                            // value={"hyy "}
                            className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                            type="email"
                        />
                    </div>
                    <div className='flex w-[75%]'>
                        <div className='mt-2 flex flex-col w-[50%] mb-3'>
                            <h1>Start Date</h1>
                            <input
                                name="startdate"
                                // value={"hyy "}
                                className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                                type="date"
                            />
                        </div>
                        <div className='mt-2 flex flex-col w-[50%] mb-3'>
                            <h1>End Date</h1>
                            <input
                                name="enddate"
                                // value={"hyy "}
                                className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                                type="date"
                            />
                        </div>
                    </div>

                    <div className='flex w-[75%]'>
                        <div className='mt-2 flex flex-col w-[50%] mb-3'>
                            <h1>Duration</h1>
                            <input
                                name="duration"
                                // value={"hyy "}
                                className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                                type="number"
                            />
                        </div>
                        <div className='mt-2 flex flex-col w-[50%] mb-3'>
                            <h1>Resumption Date</h1>
                            <input
                                name="resumptiondate"
                                // value={"hyy "}
                                className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                                type="date"
                            />
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col w-[75%] mb-3'>
                        <h1>Reason for leave</h1>
                        <input
                            name="reasons"
                            // value={"hyy "}
                            className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                            type="text"
                        />
                    </div>

                    <div className='mt-5 flex flex-col w-[75%] mb-3'>
                        <h1>Attach handover document (pdf, jpg, docx or any other format)</h1>
                        <input
                            name="files"
                            // value={"hyy "}
                            className="mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]"
                            type="file"
                        />
                    </div>

                    <div className='mt-5 flex flex-col w-[75%] mb-3'>
                        <h1>Select your relief officer</h1>
                        <select className='mt-1 mr-14 text-[#000000cd] p-1.5 rounded-sm bg-[#E3EDF9]' name="category">
                            <option id="0" >Personal</option>
                            <option id="1" >Work</option>
                        </select>
                    </div>

                    <div className='flex w-[75%] justify-start mb-5'>
                        <button
                            onClick={() => setOpenModal(true)}
                            className="w-1/3 mt-3 mr-14 bg-[#3F861E] rounded-[0.5vw] text-white pl-6 pr-6 p-2 font-semibold">
                            Submit
                        </button>


                        <button
                            className="w-1/3 mt-3 mr-14 border-[#FF0000] border-2 rounded-[0.5vw] text-[#FF0000] pl-6 pr-6 p-2 font-semibold">
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {openModal && (
                <div className="fixed inset-0 bg-[#00000069] bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-[350px] text-center relative">

                        {/* Thumbs UP Image */}
                        <img src="./thumb.png" alt="thumbs" className="w-24 mx-auto" />

                        {/* Title */}
                        <h1 className="text-xl font-bold text-[#0049FF] mt-4">Great Job!</h1>
                        <p className="mt-2 font-semibold text-gray-700">
                            Your leave application <br />
                            would be reviewed by the
                        </p>

                        {/* Close Button */}
                        <button
                            onClick={() => handleSubmit()}
                            className="mt-6 bg-[#0049FF] text-white font-semibold w-full rounded-lg py-2 shadow hover:bg-[#003dcc]">
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div >
    )
}

export default AnnualLeave
