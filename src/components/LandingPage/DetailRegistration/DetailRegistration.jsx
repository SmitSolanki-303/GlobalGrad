import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools, FaAward } from "react-icons/fa";

// Import all the step components
import PersonalDetails from './PersonalDetails/PersonalDetails';
import EducationQualification from './EducationQualification/EducationQualification';
import WorkExperience from './WorkExperience/WorkExperience';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import Skills from './Skills/Skills';
import Achievement from './Achievement/Achievement';

const steps = [
    { id: 1, icon: <FaUser />, title: "Personal Details", description: "Basic information to get started" },
    { id: 2, icon: <FaGraduationCap />, title: "Education Qualification", description: "Your academic background" },
    { id: 3, icon: <FaBriefcase />, title: "Work Experience", description: "Your professional journey" },
    { id: 4, icon: <FaProjectDiagram />, title: "Project Details", description: "Showcase your projects" },
    { id: 5, icon: <FaTools />, title: "Skills", description: "Your technical expertise" },
    { id: 6, icon: <FaAward />, title: "Achievement", description: "Your accomplishments" },
];

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
    </div>
);

const DetailRegistration = () => {
    const [selectedStep, setSelectedStep] = useState(1);
    const navigate = useNavigate();

    // State for all form data
    const [formData, setFormData] = useState({
        personalDetails: {
            profilePic: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dob: ''
        },
        educationQualifications: [],
        workExperiences: [],
        projectDetails: [],
        skills: [],
        achievements: []
    });

    // Update data for a specific section
    const updateSectionData = (section) => (data) => {
        setFormData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    const handleNext = () => {
        if (selectedStep < steps.length) {
            setSelectedStep((prev) => prev + 1);
        } else {
            console.log("Navigating to Portfolio Website...");
            navigate('/portfolio-website');
        }
    };
    

    // Render the current step content
    const renderStepContent = () => {
        switch (selectedStep) {
            case 1:
                return <PersonalDetails data={formData.personalDetails} updateData={updateSectionData('personalDetails')} />;
            case 2:
                return <EducationQualification data={formData.educationQualifications} updateData={updateSectionData('educationQualifications')} />;
            case 3:
                return <WorkExperience data={formData.workExperiences} updateData={updateSectionData('workExperiences')} />;
            case 4:
                return <ProjectDetails data={formData.projectDetails} updateData={updateSectionData('projectDetails')} />;
            case 5:
                return <Skills data={formData.skills} updateData={updateSectionData('skills')} />;
            case 6:
                return <Achievement data={formData.achievements} updateData={updateSectionData('achievements')} />;
            default:
                return null;
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
                            
                            {/* Dynamic Form Content */}
                            <div className="space-y-6">
                                {renderStepContent()}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-6 mt-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRegistration;