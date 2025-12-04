import React, { useState } from 'react'
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

    const handleSubmit = () => {
        const { firstName, lastName, email, phone, pass1, pass2, newsletter, terms } = form;

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email address!");
            return;
        }

        // Password match check
        if (pass1 !== pass2) {
            toast.error("Passwords do not match!");
            return;
        }

        // Checkbox validation
        if (!terms) {
            toast.error("You must agree to Terms & Privacy Policy!");
            return;
        }

        localStorage.setItem("userData", JSON.stringify(form));


        setTimeout(() => {
            navigate("/logins");
        }, 500);

        toast.success("Account created successfully!");

        console.log("Form Data:", form);
    };
    return (
        <div>
            <ToastContainer />

            <div className="h-[100vh] flex flex-row justify-center">
                {/* ---------- LEFT SECTION ---------- */}
                <div className="text-white w-[35%] h-full flex flex-col bg-[url(./lgbg.png)] bg-cover">
                    <div className="flex flex-col">
                        <img className="ml-2 w-36 mt-5" src="./logo.png" alt="" />
                        <h1 className="ml-6 mt-[10vw] text-3xl font-extrabold">HR Management Platform</h1>
                        <div className="bg-white border-3 rounded-4xl w-[6vw] ml-6"></div>
                        <h5 className="mt-4 ml-6">
                            Manage all employees, payrolls, and other
                            <br />
                            human resource operations.
                        </h5>
                    </div>
                </div>

                {/* ---------- RIGHT SECTION ---------- */}
                <div className="w-[65%] pl-8 flex flex-col text-white p-8">
                    <h1 className="mt-10 text-[#253D90] font-extrabold text-4xl">
                        Welcome to <br /> XCELTECH
                    </h1>
                    <h1 className="mt-2 text-[#969696]">Register your account</h1>

                    {/* Inputs */}
                    <div className="flex flex-row mt-5">
                        <div className="flex flex-col">
                            <h4 className="text-[#253D90]">First Name</h4>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="text"
                            />
                        </div>
                        <div className="ml-6 flex flex-col">
                            <h4 className="text-[#253D90]">Last Name</h4>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row mt-4">
                        <div className="flex flex-col">
                            <h4 className="text-[#253D90]">E-mail Address</h4>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="email"
                            />
                        </div>
                        <div className="ml-6 flex flex-col">
                            <h4 className="text-[#253D90]">Phone Number</h4>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row mt-4">
                        <div className="flex flex-col">
                            <h4 className="text-[#253D90]">Password</h4>
                            <input
                                name="pass1"
                                value={form.pass1}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="password"
                            />
                        </div>
                        <div className="ml-6 flex flex-col">
                            <h4 className="text-[#253D90]">Confirm Password</h4>
                            <input
                                name="pass2"
                                value={form.pass2}
                                onChange={handleChange}
                                className="mt-1 text-black border-2 p-[0.3vw] rounded-sm border-[#CBB4B4]"
                                type="password"
                            />
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <label className="font-medium mt-6 flex items-center">
                        <input name="newsletter" type="checkbox" checked={form.newsletter} onChange={handleChange} />
                        <span className="ml-2 text-[#969696]">Yes, I want to receive KRIS newsletters</span>
                    </label>

                    <label className="font-medium mt-1 flex items-center">
                        <input name="terms" type="checkbox" checked={form.terms} onChange={handleChange} />
                        <span className="ml-2 text-[#969696]">
                            I agree to all the <span className="text-[#253D90] font-bold">Terms, Privacy Policy</span>
                        </span>
                    </label>

                    <button
                        onClick={handleSubmit}
                        className="mt-4 bg-[#253D90] rounded-[0.5vw] text-white pl-6 pr-6 p-2 font-semibold w-fit">
                        Create Account
                    </button>
                    <h1 onClick={() => {
                        navigate("/logins");
                    }} className='mt-4 text-black'>Already have an account? <span className='text-[#253D90] font-bold'> Log In</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Register
