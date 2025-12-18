import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        pass1: "",
        pass2: "",
        newsletter: false,
        terms: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const [showRoleDialog, setShowRoleDialog] = useState(false);
    const handleRoleSelect = (role) => {
        setShowRoleDialog(false);

        if (role === "admin") {
            navigate("/adminlogin");
        } else {
            navigate("/logins");
        }
    };
    const handleSubmit = () => {
        const { email, pass1, pass2, terms } = form;

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Invalid email address!");
            return;
        }

        if (pass1 !== pass2) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!terms) {
            toast.error("You must agree to Terms & Privacy Policy!");
            return;
        }

        localStorage.setItem("userData", JSON.stringify(form));
        toast.success("Account created successfully!");

        setShowRoleDialog(true);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <ToastContainer />

            {/* LEFT SECTION */}
            <div className="hidden lg:flex w-[40%] bg-[url(./lgbg.png)] bg-cover bg-center text-white flex-col justify-between p-8">
                <img className="w-36" src="./logo.png" alt="" />
                <div>
                    <h1 className="text-3xl font-extrabold">
                        HR Management Platform
                    </h1>
                    <p className="mt-4 text-sm">
                        Manage all employees, payrolls, and other
                        human resource operations.
                    </p>
                </div>
            </div>

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
            {/* RIGHT SECTION */}
            <div className="flex-1 flex justify-center items-center p-4">
                <div className="w-full max-w-2xl bg-white rounded-xl p-6 md:p-8">
                    <h1 className="text-[#253D90] font-extrabold text-3xl md:text-4xl">
                        Welcome to <br /> XCELTECH
                    </h1>
                    <p className="text-[#969696] mt-2">
                        Register your account
                    </p>

                    {/* FORM */}
                    <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                            <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="E-mail Address" name="email" value={form.email} onChange={handleChange} />
                            <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Password" type="password" name="pass1" value={form.pass1} onChange={handleChange} />
                            <Input label="Confirm Password" type="password" name="pass2" value={form.pass2} onChange={handleChange} />
                        </div>

                        {/* CHECKBOXES */}
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                            <span className="ml-2">Yes, I want to receive newsletters</span>
                        </label>

                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
                            <span className="ml-2">
                                I agree to the <span className="text-[#253D90] font-bold">Terms & Privacy Policy</span>
                            </span>
                        </label>

                        {/* BUTTON */}
                        <button
                            onClick={handleSubmit}
                            className="w-full md:w-fit bg-[#253D90] text-white px-6 py-2 rounded-md font-semibold">
                            Create Account
                        </button>

                        <p
                            onClick={() => navigate("/logins")}
                            className="text-sm text-center md:text-left cursor-pointer"
                        >
                            Already have an account?
                            <span className="text-[#253D90] font-bold ml-1">Log In</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Input = ({ label, type = "text", ...props }) => (
    <div className="flex flex-col">
        <label className="text-[#253D90] text-sm font-medium">{label}</label>
        <input
            type={type}
            className="mt-1 border border-[#CBB4B4] rounded-md px-3 py-2 text-black outline-none"
            {...props}
        />
    </div>
);

export default Register;
