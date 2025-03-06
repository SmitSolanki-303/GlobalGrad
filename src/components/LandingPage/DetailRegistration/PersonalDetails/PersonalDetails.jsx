import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const ProfileUpload = ({ profilePic, handleProfileUpload }) => (
    <div className="mb-8 text-center">
        <div className="relative inline-block">
            {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-pink-200" />
            ) : (
                <div className="w-32 h-32 rounded-full bg-pink-50 flex items-center justify-center border-4 border-pink-200">
                    <FaCloudUploadAlt className="w-12 h-12 text-pink-300" />
                </div>
            )}
            <label className="absolute bottom-0 right-0 bg-pink-500 text-white p-2 rounded-full cursor-pointer hover:bg-pink-600 transition-colors">
                <FaCloudUploadAlt />
                <input type="file" className="hidden" onChange={handleProfileUpload} accept="image/*" />
            </label>
        </div>
    </div>
);

const PersonalDetails = ({ data, updateData }) => {
    const handleChange = (e) => {
        updateData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleProfileUpload = (e) => {
        const file = e.target.files[0];
        updateData({
            ...data,
            profilePic: URL.createObjectURL(file)
        });
    };

    return (
        <>
        <h2 className="text-xl font-semibold mb-6">Personal Details</h2>
            <ProfileUpload 
                profilePic={data.profilePic} 
                handleProfileUpload={handleProfileUpload} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        value={data.firstName}
                        onChange={handleChange}
                        className={inputClass} 
                        placeholder="Enter your first name" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        value={data.lastName}
                        onChange={handleChange}
                        className={inputClass} 
                        placeholder="Enter your last name" 
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className={inputClass} 
                    placeholder="you@example.com" 
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className={inputClass} 
                        placeholder="Enter your phone number" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input 
                        type="date" 
                        name="dob"
                        value={data.dob}
                        onChange={handleChange}
                        className={inputClass} 
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalDetails;