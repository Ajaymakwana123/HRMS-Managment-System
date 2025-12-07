import React, { useState } from 'react'
import NavPart from './NavPart'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const [activeTab, setActiveTab] = useState("personal")
    const [form, setForm] = useState({
        phone1: "",
        phone2: "",
        email: "",
        city: "",
        address: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        alert("Details Updated Successfully!");
        console.log(form);
    };

    const [form1, setForm1] = useState({
        name: "",
        occupation: "",
        phone: "",
        relationship: "",
        address: "",
    });

    const handleChange1 = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit1 = () => {
        alert("Next of kin details updated!");
        console.log(form);
    };

    return (
        <div>
            <NavPart />
            <div className='bg-[#E3EDF9] w-[100%] p-2'>
                <div className='bg-white m-5 p-4'>
                    <h1>Dashboard > Update Profile</h1>
                </div>

                <div className='flex ml-5 m-3'>
                    <div className='p-4 h-fit rounded-sm bg-white'>
                        <h1 onClick={() => setActiveTab("personal")}
                            className={`${activeTab === "personal" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Personal Details
                        </h1>

                        <h1 onClick={() => setActiveTab("contact")}
                            className={`${activeTab === "contact" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Contact Details
                        </h1>

                        <h1 onClick={() => setActiveTab("kin")}
                            className={`${activeTab === "kin" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Next of Kin Details
                        </h1>

                        <h1 onClick={() => setActiveTab("education")}
                            className={`${activeTab === "education" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Education Qualifications
                        </h1>
                        <h1
                            onClick={() => setActiveTab("guarantor")}
                            className={`${activeTab === "guarantor" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Guarantor Details</h1>
                        <h1 onClick={() => setActiveTab("family")}
                            className={`${activeTab === "family" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Family Details</h1>
                        <h1 onClick={() => setActiveTab("job")}
                            className={`${activeTab === "job" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Job Details</h1>
                        <h1 onClick={() => setActiveTab("financial")}
                            className={`${activeTab === "financial" ? "bg-[#FFC20E]" : "bg-[#E3EDF9]"} mb-4 rounded-sm p-2.5 px-12 text-center cursor-pointer`}>
                            Financial Details</h1>
                    </div>

                    <div className='p-4 w-[73%] h-fit rounded-sm flex flex-col relative ml-5 bg-white'>
                        {activeTab === "personal" && (
                            <div>
                                <div className='absolute right-1/5 top-14'>
                                    <img className='w-10' src="./edit.png" alt="" />
                                    <h1 className='mt-0.5 font-semibold'>Edit</h1>
                                </div>
                                <div className='flex flex-col items-center h-full justify-center'>
                                    <img className='w-40' src="./profile.png" alt="" />
                                    <h1 className='mt-8'>Employee Name</h1>
                                    <h1 className='mt-1 font-bold'>Name</h1>

                                    <h1 className='mt-8'>Department</h1>
                                    <h1 className='mt-1 font-bold'>Design & Marketing</h1>
                                    <div className='flex gap-30 mt-6 mb-15'>
                                        <div>
                                            <h1 className='mt-4'>Job Title</h1>
                                            <h1 className='mt-1 font-bold'>UI / UX Designer</h1>
                                        </div>

                                        <div>
                                            <h1 className='mt-4'>Job Category</h1>
                                            <h1 className='mt-1 font-bold'>Full time</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "contact" && (
                            <div>
                                <div className="bg-white w-[85%] p-4 rounded-md">
                                    {/* Phone numbers */}
                                    <div className="flex gap-6 mb-5 w-full">
                                        <div className="flex flex-col w-1/2">
                                            <label className="text-[15px] font-semibold mb-1">Phone Number 1</label>
                                            <input
                                                type="text"
                                                name="phone1"
                                                value={form.phone1}
                                                onChange={handleChange}
                                                placeholder="Phone Number 1"
                                                className="p-2 bg-[#E3EDF9] rounded-md"
                                            />
                                        </div>

                                        <div className="flex flex-col w-1/2">
                                            <label className="text-[15px] font-semibold mb-1">Phone Number 2</label>
                                            <input
                                                type="text"
                                                name="phone2"
                                                value={form.phone2}
                                                onChange={handleChange}
                                                placeholder="Phone Number 2"
                                                className="p-2 bg-[#E3EDF9] rounded-md"
                                            />
                                        </div>
                                    </div>

                                    {/* email */}
                                    <div className="flex flex-col mb-5 w-full">
                                        <label className="text-[15px] font-semibold mb-1">E-mail Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="example@gmail.com"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="flex flex-col mb-5 w-full">
                                        <label className="text-[15px] font-semibold mb-1">City of residence</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            placeholder="Enter City"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="flex flex-col mb-7 w-full">
                                        <label className="text-[15px] font-semibold mb-1">Residential Address</label>
                                        <textarea
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                            placeholder="Enter Address"
                                            rows="3"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        ></textarea>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="bg-[#3F861E] text-white font-semibold rounded-md px-10 py-2"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "kin" && (
                            <div className="bg-white w-[85%] p-4 rounded-md">
                                {/* First row */}
                                <div className="flex gap-6 mb-5 w-full">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[15px] font-semibold mb-1">Next of kin name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form1.name}
                                            onChange={handleChange1}
                                            placeholder="Samson Dawit"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[15px] font-semibold mb-1">Job / Occupation</label>
                                        <input
                                            type="text"
                                            name="occupation"
                                            value={form1.occupation}
                                            onChange={handleChange1}
                                            placeholder="IT Manager"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Second row */}
                                <div className="flex gap-6 mb-5 w-full">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[15px] font-semibold mb-1">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={form1.phone}
                                            onChange={handleChange1}
                                            placeholder="099332212"
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        />
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[15px] font-semibold mb-1">Relationship</label>
                                        <select
                                            name="relationship"
                                            value={form1.relationship}
                                            onChange={handleChange1}
                                            className="p-2 bg-[#E3EDF9] rounded-md"
                                        >
                                            <option value="">Select</option>
                                            <option value="Relative">Relative</option>
                                            <option value="Father">Father</option>
                                            <option value="Mother">Mother</option>
                                            <option value="Sibling">Sibling</option>
                                            <option value="Friend">Friend</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex flex-col mb-7 w-full">
                                    <label className="text-[15px] font-semibold mb-1">Residential Address</label>
                                    <textarea
                                        name="address"
                                        value={form1.address}
                                        onChange={handleChange1}
                                        placeholder="Alembank, Addis Ababa"
                                        rows="3"
                                        className="p-2 bg-[#E3EDF9] rounded-md"
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit1}
                                    className="bg-[#3F861E] text-white font-semibold rounded-md px-10 py-2"
                                >
                                    Update
                                </button>
                            </div>
                        )}
                        {activeTab === "education" && (
                            <div className="bg-white w-[85%] p-4 rounded-md">

                                {/* Academic Records */}
                                <h2 className="text-[17px] font-bold mb-4">Academic Records</h2>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">Jimma University</h3>
                                    <p className="text-[14px]">B.Sc in Computer Science, May 2014 – May 2018</p>
                                </div>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-8">
                                    <h3 className="font-bold text-[16px]">Cathedral school</h3>
                                    <p className="text-[14px]">Sep 2008 – June 2012</p>
                                </div>

                                {/* Professional Qualifications */}
                                <h2 className="text-[17px] font-bold mb-4">Professional Qualifications</h2>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">CCNA Certification</h3>
                                    <p className="text-[14px]">@ Addis Ababa University , May 2019 – September 2021</p>
                                </div>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">Google UI / UX Certification</h3>
                                    <p className="text-[14px]">September 2021 – September 2022</p>
                                </div>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">Web Developer</h3>
                                    <p className="text-[14px]">@ EAHI , May 2019 – September 2021</p>

                                    <ul className="list-disc pl-6 mt-2 text-[14px]">
                                        <li>Collaborated with teammates to deliver valuable features meeting business and customer needs.</li>
                                    </ul>
                                </div>

                            </div>
                        )}
                        {activeTab === "guarantor" && (
                            <div className="bg-white w-[85%] p-4 rounded-md">
                                {/* Title */}
                                <h2 className="text-[18px] font-bold mb-6">Guarantor Details</h2>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">MR Natnael Dawit</h3>
                                    <p className="text-[14px]">
                                        Human resource, Abysinia bank – 090 500 500 6000
                                    </p>
                                </div>

                                <div className="bg-[#E3EDF9] rounded-md p-4 mb-4">
                                    <h3 className="font-bold text-[16px]">MR Natnael Dawit</h3>
                                    <p className="text-[14px]">
                                        Accountant, Abysinia bank – 090 500 500 6000
                                    </p>
                                </div>
                            </div>)}
                        {activeTab === "family" && (
                            <div className="bg-white w-[85%] p-4 rounded-md">
                                {/* Title */}
                                <h2 className="text-[18px] font-bold mb-6">View Family Details</h2>

                                {/* Full Name */}
                                <div className="mb-4">
                                    <label className="font-semibold">Full Name</label>
                                    <input
                                        type="text"
                                        value="Natnael dawit"
                                        className="w-full mt-1 bg-[#E3EDF9] p-3 rounded-md outline-none"
                                    />
                                </div>

                                {/* Relationship + Phone No */}
                                <div className="flex gap-6 mb-4">
                                    <div className="w-1/2">
                                        <label className="font-semibold">Relationship</label>
                                        <input
                                            type="text"
                                            value="Brother"
                                            className="w-full mt-1 bg-[#E3EDF9] p-3 rounded-md outline-none"
                                        />
                                    </div>

                                    <div className="w-1/2">
                                        <label className="font-semibold">Phone No</label>
                                        <input
                                            type="text"
                                            value="0983234567"
                                            className="w-full mt-1 bg-[#E3EDF9] p-3 rounded-md outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="font-semibold">Address</label>
                                    <textarea
                                        value="Djibouti street ,Addis Ababa"
                                        className="w-full mt-1 bg-[#E3EDF9] p-3 rounded-md outline-none h-24"
                                    />
                                </div>

                                {/* Update Button */}
                                <button className="bg-[#3F861E] text-white font-semibold py-2 px-10 rounded-md">
                                    Update
                                </button>
                            </div>)}
                        {activeTab === "job" && (
                            <div className="bg-white w-[85%] p-4 rounded-md">
                                {/* Title */}
                                <h2 className="text-[18px] font-bold mb-6">View Job Details</h2>

                                {/* Job Role */}
                                <div className="text-center mb-10">
                                    <h3 className="text-[17px] font-semibold">Job Role</h3>
                                    <h1 className="text-[22px] font-bold mt-1">UI UX Designer</h1>
                                </div>

                                {/* Department + Line Manager */}
                                <div className="flex justify-between px-20 mb-10">
                                    <div className="text-center">
                                        <h3 className="text-[15px] font-semibold">Department</h3>
                                        <p className="font-bold text-[18px] mt-1">Design & Marketing</p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-[15px] font-semibold">Line Manager</h3>
                                        <p className="font-bold text-[18px] mt-1">Mr Domino’s Pizza</p>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div>
                                    <h3 className="font-semibold text-[18px] text-center mb-4">
                                        Job Description
                                    </h3>

                                    <p className="font-semibold mb-2">Your responsibilities will include:</p>

                                    <ul className="list-disc space-y-2 pl-8 text-[15px] font-medium">
                                        <li>
                                            Creating user-centered designs by understanding business requirements, and user
                                            feedback
                                        </li>
                                        <li>Creating user flows, wireframes, prototypes and mockups</li>
                                        <li>
                                            Translating requirements into style guides, design systems, design patterns and attractive user interfaces
                                        </li>
                                        <li>
                                            Designing UI elements such as input controls, navigational components and
                                            informational components
                                        </li>
                                        <li>
                                            Creating original graphic designs (e.g. images, sketches and tables)
                                        </li>
                                        <li>Identifying and troubleshooting UX problems (e.g. responsiveness)</li>
                                        <li>
                                            Collaborating effectively with product, engineering, and management teams
                                        </li>
                                        <li>
                                            Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === "financial" && (

                            <div className="bg-white w-[85%] p-4 rounded-md">
                                <h2 className="text-[18px] font-bold mb-6">Financial Details</h2>

                                <div className="mb-5 w-full">
                                    <label className="font-semibold text-[15px]">Bank Name</label>
                                    <input
                                        type="text"
                                        className="mt-2 w-full bg-[#E3EDF9] text-[15px] font-medium p-3 rounded-md outline-none"
                                    />
                                </div>

                                {/* Account No + Account Name */}
                                <div className="flex justify-between w-full mb-8 gap-8">
                                    <div className="w-1/2">
                                        <label className="font-semibold text-[15px]">Account No</label>
                                        <input
                                            type="text"
                                            value="100013455451"
                                            className="mt-2 w-full bg-[#E3EDF9] text-[15px] font-bold p-3 rounded-md outline-none"
                                        />
                                    </div>

                                    <div className="w-1/2">
                                        <label className="font-semibold text-[15px]">Account Name</label>
                                        <input
                                            type="text"
                                            value="Natnael melaku"
                                            className="mt-2 w-full bg-[#E3EDF9] text-[15px] font-medium p-3 rounded-md outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button className="bg-[#3F861E] text-white font-semibold py-3 px-10 rounded-md text-[15px] w-[40%]">
                                        Update Account Details
                                    </button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
