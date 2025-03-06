import React, { useState, useEffect, useCallback } from 'react';
import { FaBriefcase, FaPlus, FaTrash } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const WorkItem = ({ work, index, handleChange, handleRemove, handleBulletAdd, handleBulletChange, handleBulletRemove }) => {
    return (
        <div className="p-6 border border-gray-200 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                    <FaBriefcase className="mr-2 text-pink-500" />
                    Work Experience #{index + 1}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                        type="text" 
                        name="company" 
                        value={work.company} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter company name" 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role/Position</label>
                    <input 
                        type="text" 
                        name="role" 
                        value={work.role} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter your role" 
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input 
                            type="month" 
                            name="startDate" 
                            value={work.startDate} 
                            onChange={(e) => handleChange(index, e)} 
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input 
                            type="month" 
                            name="endDate" 
                            value={work.endDate} 
                            onChange={(e) => handleChange(index, e)} 
                            className={inputClass}
                            disabled={work.current}
                        />
                    </div>
                </div>
                
                <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        id={`current-${index}`} 
                        name="current" 
                        checked={work.current} 
                        onChange={(e) => handleChange(index, { target: { name: "current", value: e.target.checked }})} 
                        className="mr-2" 
                    />
                    <label htmlFor={`current-${index}`} className="text-sm text-gray-700">I currently work here</label>
                </div>
                
                {/* Description Bullet Points */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                    
                    {work.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center mb-2">
                            <input 
                                type="text" 
                                value={bullet} 
                                onChange={(e) => handleBulletChange(index, bulletIndex, e.target.value)} 
                                className={`${inputClass} mr-2`} 
                                placeholder="Add description" 
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
                        <FaPlus className="mr-1" /> Add description point
                    </button>
                </div>
            </div>
        </div>
    );
};

const WorkExperience = ({ data, updateData }) => {
    const [workList, setWorkList] = useState(data.length > 0 ? data : [
        {
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            current: false,
            bullets: []
        }
    ]);

    useEffect(() => {
        updateData(workList);
    }, [workList]);

    const handleAddWork = () => {
        setWorkList(prevList => [
            ...prevList, 
            {
                company: '',
                role: '',
                startDate: '',
                endDate: '',
                current: false,
                bullets: []
            }
        ]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        setWorkList(prevList => {
            const updatedList = [...prevList];
            updatedList[index] = {
                ...updatedList[index],
                [name]: value
            };
            return updatedList;
        });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Work Experience</h2>
            {workList.map((work, index) => (
                <WorkItem 
                    key={index} 
                    work={work} 
                    index={index} 
                    handleChange={handleChange} 
                    handleRemove={(idx) => setWorkList(prev => prev.filter((_, i) => i !== idx))}
                    handleBulletAdd={(idx) => setWorkList(prev => {
                        const updated = [...prev];
                        updated[idx].bullets.push('');
                        return updated;
                    })}
                    handleBulletChange={(idx, bulletIdx, val) => setWorkList(prev => {
                        const updated = [...prev];
                        updated[idx].bullets[bulletIdx] = val;
                        return updated;
                    })}
                    handleBulletRemove={(idx, bulletIdx) => setWorkList(prev => {
                        const updated = [...prev];
                        updated[idx].bullets = updated[idx].bullets.filter((_, i) => i !== bulletIdx);
                        return updated;
                    })}
                />
            ))}
            <button type="button" onClick={handleAddWork} className="flex items-center text-pink-500 hover:text-pink-700 mt-4">
                <FaPlus className="mr-2" /> Add Another Work Experience
            </button>
        </div>
    );
};

export default WorkExperience;
