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

    const [showRoleDialog, setShowRoleDialog] = useState(false);
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
        setShowRoleDialog(true); // open dialog after login
    };

    const handleRoleSelect = (role) => {
        setShowRoleDialog(false);

        if (role === "admin") {
            navigate("/admindashboard");
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <ToastContainer />

            {/* LEFT – LOGIN */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl">
                    <h1 className="text-[#253D90] font-extrabold text-3xl md:text-4xl">Login</h1>
                    <p className="mt-2 text-[#969696]">Login to your account.</p>

                    <div className="flex flex-col mt-6">
                        <label className="text-[#253D90] text-sm font-medium">E-mail Address</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="mt-1 border border-[#CBB4B4] rounded-md px-3 py-2"
                        />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="text-[#253D90] text-sm font-medium">Password</label>
                        <input
                            name="pass1"
                            value={form.pass1}
                            onChange={handleChange}
                            type="password"
                            className="mt-1 border border-[#CBB4B4] rounded-md px-3 py-2"
                        />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <span className="text-sm text-[#253D90] cursor-pointer">Reset Password?</span>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full mt-6 bg-[#253D90] text-white py-2 rounded-md font-semibold"
                    >
                        Sign In
                    </button>
                </div>
            </div>

            {/* ROLE SELECTION DIALOG */}
            {showRoleDialog && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm text-center">
                        <h2 className="text-xl font-bold text-[#253D90]">Select Role</h2>
                        <p className="text-gray-600 mt-2">Login as</p>

                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => handleRoleSelect("admin")}
                                className="flex-1 bg-[#253D90] text-white py-2 rounded-md font-semibold"
                            >
                                Admin
                            </button>
                            <button
                                onClick={() => handleRoleSelect("employee")}
                                className="flex-1 bg-[#FFC20E] text-black py-2 rounded-md font-semibold"
                            >
                                Employee
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
