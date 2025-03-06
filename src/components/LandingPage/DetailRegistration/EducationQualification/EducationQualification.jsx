import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaPlus, FaTrash } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const educationLevels = [
    { id: "10th", label: "10th Grade" },
    { id: "11th", label: "11th Grade" },
    { id: "12th", label: "12th Grade" },
    { id: "diploma", label: "Diploma" },
    { id: "degree", label: "Bachelor's Degree" },
    { id: "masters", label: "Master's Degree (Optional)" }
];

const EducationItem = ({ education, index, handleChange, handleRemove, handleBulletAdd, handleBulletChange, handleBulletRemove }) => {
    return (
        <div className="p-6 border border-gray-200 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                    <FaGraduationCap className="mr-2 text-pink-500" />
                    Education #{index + 1}
                </h3>
                {index > 0 && (
                    <button 
                        type="button" 
                        onClick={() => handleRemove(index)} 
                        className="text-red-500 hover:text-red-700"
                    >
                        <FaTrash />
                    </button>
                )}
            </div>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                    <select 
                        name="level" 
                        value={education.level} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass}
                    >
                        <option value="">Select Level</option>
                        {educationLevels.map(level => (
                            <option key={level.id} value={level.id}>{level.label}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School/Board/University Name</label>
                    <input 
                        type="text" 
                        name="institution" 
                        value={education.institution} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter institution name" 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stream/Course Name</label>
                    <input 
                        type="text" 
                        name="course" 
                        value={education.course} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter your stream or course" 
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input 
                            type="month" 
                            name="startDate" 
                            value={education.startDate} 
                            onChange={(e) => handleChange(index, e)} 
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input 
                            type="month" 
                            name="endDate" 
                            value={education.endDate} 
                            onChange={(e) => handleChange(index, e)} 
                            className={inputClass}
                        />
                    </div>
                </div>
                
                {/* Bullet Points Section */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details (Optional)</label>
                    
                    {education.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center mb-2">
                            <input 
                                type="text" 
                                value={bullet} 
                                onChange={(e) => handleBulletChange(index, bulletIndex, e.target.value)} 
                                className={`${inputClass} mr-2`} 
                                placeholder="Add detail" 
                            />
                            <button 
                                type="button" 
                                onClick={() => handleBulletRemove(index, bulletIndex)} 
                                className="text-red-500 hover:text-red-700"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                    
                    <button 
                        type="button" 
                        onClick={() => handleBulletAdd(index)} 
                        className="mt-2 flex items-center text-sm text-pink-500 hover:text-pink-700"
                    >
                        <FaPlus className="mr-1" /> Add detail point
                    </button>
                </div>
            </div>
        </div>
    );
};

const EducationQualification = ({ data, updateData }) => {
    // Initialize with one empty education item if data is empty
    const [educationList, setEducationList] = useState(
        data.length > 0 ? data : [
            {
                level: '',
                institution: '',
                course: '',
                startDate: '',
                endDate: '',
                bullets: []
            }
        ]
    );

    // Update parent component when educationList changes, but avoid re-triggering due to unnecessary renders
    useEffect(() => {
        updateData(educationList);
    }, [educationList]); // Only update when educationList actually changes

    const handleAddEducation = () => {
        setEducationList((prevList) => [
            ...prevList, 
            {
                level: '',
                institution: '',
                course: '',
                startDate: '',
                endDate: '',
                bullets: []
            }
        ]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        setEducationList((prevList) => {
            const updatedList = [...prevList];
            updatedList[index] = {
                ...updatedList[index],
                [name]: value
            };
            return updatedList;
        });
    };

    const handleRemove = (index) => {
        setEducationList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const handleBulletAdd = (educationIndex) => {
        setEducationList((prevList) => {
            const updatedList = [...prevList];
            updatedList[educationIndex].bullets.push('');
            return updatedList;
        });
    };

    const handleBulletChange = (educationIndex, bulletIndex, value) => {
        setEducationList((prevList) => {
            const updatedList = [...prevList];
            updatedList[educationIndex].bullets[bulletIndex] = value;
            return updatedList;
        });
    };

    const handleBulletRemove = (educationIndex, bulletIndex) => {
        setEducationList((prevList) => {
            const updatedList = [...prevList];
            updatedList[educationIndex].bullets = updatedList[educationIndex].bullets.filter((_, i) => i !== bulletIndex);
            return updatedList;
        });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Education Qualification</h2>
            
            {educationList.map((education, index) => (
                <EducationItem 
                    key={index} 
                    education={education} 
                    index={index} 
                    handleChange={handleChange} 
                    handleRemove={handleRemove}
                    handleBulletAdd={handleBulletAdd}
                    handleBulletChange={handleBulletChange}
                    handleBulletRemove={handleBulletRemove}
                />
            ))}
            
            <button 
                type="button" 
                onClick={handleAddEducation} 
                className="flex items-center text-pink-500 hover:text-pink-700 mt-4"
            >
                <FaPlus className="mr-2" /> Add Another Education
            </button>
        </div>
    );
};

export default EducationQualification;
