import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function login() {

    const [form, setForm] = useState({
        email: "",
        pass1: "",
        newsletter: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = () => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (!storedUser) {
            toast.error("No registered user found. Please register first!");
            return;
        }

        if (form.email !== storedUser.email) {
            toast.error("Email not found!");
            return;
        }

        if (form.pass1 !== storedUser.pass1) {
            toast.error("Incorrect password!");
            return;
        }

        toast.success("Login successful!");

        setTimeout(() => {
            navigate("/dashboard");
        }, 800);
    };

    return (
        <div>
            <ToastContainer />
            <div className="h-[100vh] flex flex-row justify-center">
                {/* ---------- LEFT SECTION ---------- */}
                <div className="w-[35%] pl-8 flex flex-col text-white p-8">
                    <h1 className="mt-18 text-[#253D90] font-extrabold text-4xl">Login</h1>
                    <h1 className="mt-2 text-[#969696]">Login to your account.</h1>
                    {/* Inputs */}

                    <div className="flex flex-col mt-10">
                        <h4 className="text-[rgb(37,61,144)]">E-mail Address</h4>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 mr-14 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h4 className="text-[#253D90]">Password</h4>
                        <input
                            name="pass1"
                            value={form.pass1}
                            onChange={handleChange}
                            className="mt-1 mr-14 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                            type="password"
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className='flex flex-row justify-between mt-5 pr-10'>
                        <label className="font-medium flex items-center">
                            <input name="newsletter" type="checkbox" checked={form.newsletter} onChange={handleChange} />
                            <span className="ml-2 text-[#969696]">Remember me</span>
                        </label>
                        <h2 className='text-[#253D90] cursor-pointer'>Reset Password?</h2>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 mr-14 bg-[#253D90] rounded-[0.5vw] text-white pl-6 pr-6 p-2 font-semibold">
                        Sign In
                    </button>
                    <h1 onClick={() => {
                    }} className='mt-4 text-black'>Don’t have an account yet? <span className='text-[#253D90] font-bold'>Join KRIS today.</span></h1>
                </div>

                {/* ---------- RIGHT SECTION ---------- */}
                <div className="text-white w-[65%] h-full flex flex-col bg-[url(./loginbg.png)] justify-end bg-cover">
                    <h1 className="ml-6 mt-[10vw] text-3xl font-extrabold">
                        Manage all <span className='text-[#FFC20E]'>HR Operations</span><br /> from the comfort of your <br />home.</h1>
                    <div className="ml-6 flex flex-row gap-4 mt-14 mb-10">
                        <div className="border-[#FFC20E] border-5 rounded-4xl w-[4vw]"></div>
                        <div className="bg-white border-5 rounded-4xl w-[4vw]"></div>
                        <div className="bg-white border-5 rounded-4xl w-[4vw]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
