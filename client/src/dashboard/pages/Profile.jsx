import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [adminProfile, setAdminProfile] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/api/admin/profile", {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        })
            .then(response => response.json())
            .then(data => {
                setAdminProfile(data)
            }
            )
    }, [])

    return (
        <div className="flex ml-auto mr-auto bg-white max-w-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden sm:rounded-lg mt-24 ml-10">
            <div className="flex flex-col px-4 py-5 sm:px-6">
                <div className=''>
                    <img className='rounded-full' src="https://i.ibb.co/Q9K8Hx9/images.jpg" alt="" />
                </div>
                <div className=''>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {adminProfile.userName}
                    </h3>


                </div>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {adminProfile.userName}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Age
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            25
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Position
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Admin
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {adminProfile.email}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            01923433544
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Profile