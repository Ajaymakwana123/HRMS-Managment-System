import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
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
            navigate("/dashboard")
        }, 400);
        // open dialog after login
    };



    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <ToastContainer />

            {/* LEFT – LOGIN */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl">
                    <h1 className="text-[#253D90] font-extrabold text-3xl md:text-4xl">Login</h1>
                    <p className="mt-2 text-[#969696]">Login to your account.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mt-6">
                            <label className="text-[#253D90] text-sm font-medium">
                                E-mail Address
                            </label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                required
                                className="mt-1 border border-[#CBB4B4] rounded-md px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col mt-4">
                            <label className="text-[#253D90] text-sm font-medium">
                                Password
                            </label>
                            <input
                                name="pass1"
                                value={form.pass1}
                                onChange={handleChange}
                                type="password"
                                required
                                className="mt-1 border border-[#CBB4B4] rounded-md px-3 py-2"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={form.newsletter}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <span className="text-sm text-[#253D90] cursor-pointer">
                                Reset Password?
                            </span>
                        </div>

                        <button
                            type="submit"   // ⬅️ important
                            className="w-full mt-6 bg-[#253D90] text-white py-2 rounded-md font-semibold"
                        >
                            Sign In
                        </button>
                    </form>

                </div>
            </div>

            {/* ROLE SELECTION DIALOG */}


            {/* RIGHT */}
            <div className="hidden lg:flex w-[45%] bg-[url(./loginbg.png)] bg-cover bg-center text-white flex-col justify-end p-10">
                <h1 className="text-3xl font-extrabold">
                    Manage all <span className="text-[#FFC20E]">HR Operations</span><br />
                    from the comfort of your <br /> home.
                </h1>
            </div>
        </div>
    );
}

export default Login;
