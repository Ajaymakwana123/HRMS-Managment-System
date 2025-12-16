import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (!form.email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!form.pass1.trim()) {
            toast.error("Password is required");
            return;
        }

        setTimeout(() => {
            navigate("/admindashboard");
        }, 200);
    };

    return (
        <div className="w-full min-h-screen bg-[url(./adminbg.png)] bg-cover bg-center relative">

            <div className="absolute top-5 left-5 sm:left-10">
                <img src="./logo.png" alt="Logo" className="w-32 sm:w-40" />
            </div>

            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="
                    w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%]
                    bg-black/40 backdrop-blur-md rounded-xl p-6 sm:p-8 text-white
                ">
                    <h1 className="text-center text-3xl sm:text-4xl font-extrabold">
                        Login
                    </h1>
                    <p className="text-center mt-2 text-sm sm:text-base">
                        Login to your account.
                    </p>

                    {/* Email */}
                    <div className="flex flex-col mt-8">
                        <label className="mb-1">E-mail Address</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full bg-transparent border-2 border-[#CBB4B4] p-2 rounded-sm text-white focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mt-4">
                        <label className="mb-1">Password</label>
                        <input
                            name="pass1"
                            value={form.pass1}
                            onChange={handleChange}
                            type="password"
                            className="w-full bg-transparent border-2 border-[#CBB4B4] p-2 rounded-sm text-white focus:outline-none"
                        />
                    </div>

                    {/* Remember / Reset */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5 gap-3">
                        <label className="flex items-center">
                            <input
                                name="newsletter"
                                type="checkbox"
                                checked={form.newsletter}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Remember me
                        </label>
                        <span className="text-sm cursor-pointer hover:underline">
                            Reset Password?
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleSubmit}
                        className="
                            w-full
                            mt-6
                            bg-[#FFC20E]
                            text-black
                            font-semibold
                            py-2
                            rounded-md
                            hover:opacity-90
                            transition
                        "
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
