import React, { useState } from 'react';
import { FaTools, FaPlus, FaTrash } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const Skills = ({ data, updateData }) => {
    // Initialize with empty array if data is empty
    const [skillList, setSkillList] = useState(data || []);
    const [newSkill, setNewSkill] = useState('');
    
    // Update parent component when skillList changes
    React.useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(skillList)) {
            updateData(skillList);
        }
    }, [skillList]);

    const handleAddSkill = () => {
        if (newSkill.trim()) {
            setSkillList([...skillList, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const handleRemoveSkill = (index) => {
        setSkillList(skillList.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Skills</h2>
            
            <div className="p-6 border border-gray-200 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                    <FaTools className="mr-2 text-pink-500" />
                    <h3 className="font-semibold text-lg">Your Technical Expertise</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                    Add skills that showcase your technical abilities (e.g., programming languages, frameworks, tools).
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {skillList.map((skill, index) => (
                        <div key={index} className="flex items-center bg-pink-50 rounded-full px-3 py-1">
                            <span className="text-sm text-pink-700 mr-2">{skill}</span>
                            <button 
                                type="button" 
                                onClick={() => handleRemoveSkill(index)} 
                                className="text-pink-500 hover:text-pink-700 text-xs"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
                
                <div className="flex items-center">
                    <input 
                        type="text" 
                        value={newSkill} 
                        onChange={(e) => setNewSkill(e.target.value)} 
                        onKeyPress={handleKeyPress}
                        className={`${inputClass} mr-2`} 
                        placeholder="Add a new skill (e.g., HTML, CSS, JavaScript)" 
                    />
                    <button 
                        type="button" 
                        onClick={handleAddSkill} 
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                    <strong>Tip:</strong> Include a mix of technical skills (programming languages, tools) and soft skills 
                    (communication, teamwork) to give a comprehensive view of your abilities.
                </p>
            </div>
        </div>
    );
};

export default Skills;