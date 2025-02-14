import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools, FaAward } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";


const steps = [
    { id: 1, icon: <FaUser />, title: "Personal Details", description: "Basic information to get started" },
    { id: 2, icon: <FaGraduationCap />, title: "Education Qualification", description: "Your academic background" },
    { id: 3, icon: <FaBriefcase />, title: "Work Experience", description: "Your professional journey" },
    { id: 4, icon: <FaProjectDiagram />, title: "Project Details", description: "Showcase your projects" },
    { id: 5, icon: <FaTools />, title: "Skills", description: "Your technical expertise" },
    { id: 6, icon: <FaAward />, title: "Achievement", description: "Your accomplishments" },
];


const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const StepItem = ({ step, selectedStep, onClick }) => (
    <div
        key={step.id}
        className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all 
        ${selectedStep === step.id ? 'bg-pink-50 border-l-4 border-pink-500' : 'hover:bg-gray-50'}`}
        onClick={() => onClick(step.id)}
    >
        <div className={`p-3 rounded-full ${selectedStep === step.id ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
            {step.icon}
        </div>
        <div>
            <h3 className={`font-semibold ${selectedStep === step.id ? 'text-pink-500' : 'text-gray-700'}`}>
                {step.title}
            </h3>
            <p className="text-sm text-gray-500">{step.description}</p>
        </div>
    </div>
);

const ProgressBar = ({ progress }) => (
    <div className="mb-8">
        <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-2 bg-pink-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        {/* <div className="mt-2 text-sm text-gray-500 text-right">
            Step {progress / (100 / steps.length)} of {steps.length}
        </div> */}
    </div>
);

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

const DetailRegistration = () => {

    const [profilePic, setProfilePic] = useState(null);
    const [selectedStep, setSelectedStep] = useState(1);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleProfileUpload = (e) => {
        const file = e.target.files[0];
        setProfilePic(URL.createObjectURL(file));
    };

    const handleNext = () => {
        if (selectedStep < steps.length) {
            setSelectedStep((prev) => prev + 1);
        } else {
            navigate('/portfolio-website'); // Redirect when "Complete" is clicked
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-1">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mt-40">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Portfolio</h1>
                    <p className="text-lg text-gray-600">Join thousands of professionals showcasing their work</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Steps */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <div className="space-y-6">
                                {steps.map((step) => (
                                    <StepItem key={step.id} step={step} selectedStep={selectedStep} onClick={setSelectedStep} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <ProgressBar progress={(selectedStep / steps.length) * 100} />
                            <ProfileUpload profilePic={profilePic} handleProfileUpload={handleProfileUpload} />

                            {/* Form Fields */}
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input type="text" className={inputClass} placeholder="Enter your first name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input type="text" className={inputClass} placeholder="Enter your last name" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className={inputClass} placeholder="you@example.com" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" className={inputClass} placeholder="Enter your phone number" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                        <input type="date" className={inputClass} />
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <div className="flex justify-between pt-6">
                                    <button
                                        type="button"
                                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                                        disabled={selectedStep === 1}
                                        onClick={() => setSelectedStep((prev) => prev - 1)}
                                    >
                                        Back
                                    </button>
                                    <button
                                    type="button"
                                    className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition"
                                    onClick={handleNext}
                                >
                                    {selectedStep === steps.length ? 'Complete' : 'Next'}
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRegistration;
