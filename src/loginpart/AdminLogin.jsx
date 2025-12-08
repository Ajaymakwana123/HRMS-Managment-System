import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

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
        setTimeout(() => {
            navigate("/admindashboard");
        }, 800);
    };

    return (
        <div>
            <div className='w-full h-[100vh] relative bg-[url(./adminbg.png)]'>
                <div className='top-5 absolute'>
                    <img src="./logo.png" alt="" />
                </div>
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%] w-[35%] pl-8 flex flex-col text-white p-8">
                    <h1 className="text-center mt-18 text-white font-extrabold text-4xl">Login</h1>
                    <h1 className="text-center mt-2 text-white">Login to your account.</h1>

                    <div className="flex flex-col mt-10">
                        <h4 className="text-white">E-mail Address</h4>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 mr-14 text-white border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h4 className="text-white">Password</h4>
                        <input
                            name="pass1"
                            value={form.pass1}
                            onChange={handleChange}
                            className="mt-1 mr-14 text-white border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                            type="password"
                        />
                    </div>
                    <div className='flex flex-row justify-between mt-5 pr-10'>
                        <label className="font-medium flex items-center">
                            <input name="newsletter" type="checkbox" checked={form.newsletter} onChange={handleChange} />
                            <span className="ml-2 text-white">Remember me</span>
                        </label>
                        <h2 className='text-white cursor-pointer'>Reset Password?</h2>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 mr-14 bg-[#FFC20E] rounded-[0.5vw] text-black pl-6 pr-6 p-2 font-semibold">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin