
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterNewAdmin = () => {
    const navigate = useNavigate();
    const currentValue = null;
    const [passwordError, setPasswordError] = useState('');
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (password != confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        axios.post("http://localhost:5000/api/admin/register", {
            userName: form.userName.value,
            email: form.email.value,
            password: form.password.value,
        }).then((response) => {
            alert("Registration successfull")
            navigate("/dashboard")
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    };
    return (
        <div className=" bg-slate-100 pb-16 mt-16 overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
                <form className="p-8 " onSubmit={handleSubmit}>
                    <div className=' content-center text-2xl font-bold mb-4 md:mb-6 text-gray-800'>Register New Admin</div>
                    <div className='lg:flex lg:justify-between'>
                        <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="bookName">
                                User Name
                            </label>
                            <input type="text" name="userName" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter User Name" required />
                        </div>
                        <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="authorName">
                                Email
                            </label>
                            <input type="text" name="email" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Email" required />
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between'>
                        <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="publishedYear">
                                Password
                            </label>
                            <input type="text" name="password" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Password" required />
                        </div>
                        <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="bookCategory">
                                Confirm Password
                            </label>
                            <input type="text" name="confirmPassword" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Confirm Password" required />
                        </div>
                    </div>
                    {passwordError && (
                        <div className="text-red-500 text-sm mb-4">{passwordError}</div>
                    )}
                    <button type="submit" className=" border-gray-50 bg-gradient-to-b from-green-700 to-green-900 font-medium md:px-4 md:py-2 text-white w-2/5 rounded">Create Admin</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterNewAdmin