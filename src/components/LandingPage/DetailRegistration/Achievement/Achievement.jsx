import React, { useState } from 'react';
import { FaAward, FaPlus, FaTrash } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const AchievementItem = ({ achievement, index, handleChange, handleRemove, handleKeywordAdd, handleKeywordRemove }) => {
    const [newKeyword, setNewKeyword] = useState('');
    
    const handleAddKeyword = () => {
        if (newKeyword.trim()) {
            handleKeywordAdd(index, newKeyword.trim());
            setNewKeyword('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddKeyword();
        }
    };

    return (
        <div className="p-6 border border-gray-200 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                    <FaAward className="mr-2 text-pink-500" />
                    Achievement #{index + 1}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Achievement Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={achievement.title} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter achievement title" 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea 
                        name="description" 
                        value={achievement.description} 
                        onChange={(e) => handleChange(index, e)} 
                        className={`${inputClass} h-24`} 
                        placeholder="Describe what you achieved and how it was significant" 
                    />
                </div>
                
                {/* Keywords Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (skills/lessons learned)</label>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                        {achievement.keywords.map((keyword, keywordIndex) => (
                            <div key={keywordIndex} className="flex items-center bg-pink-50 rounded-full px-3 py-1">
                                <span className="text-sm text-pink-700 mr-2">{keyword}</span>
                                <button 
                                    type="button" 
                                    onClick={() => handleKeywordRemove(index, keywordIndex)} 
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
                            value={newKeyword} 
                            onChange={(e) => setNewKeyword(e.target.value)} 
                            onKeyPress={handleKeyPress}
                            className={`${inputClass} mr-2`} 
                            placeholder="Add keyword (e.g., Leadership, Teamwork)" 
                        />
                        <button 
                            type="button" 
                            onClick={handleAddKeyword} 
                            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Achievement = ({ data, updateData }) => {
    // Initialize with one empty achievement item if data is empty
    const [achievementList, setAchievementList] = useState(
        data.length > 0 ? data : [
            {
                title: '',
                description: '',
                keywords: []
            }
        ]
    );
    
    // Update parent component when achievementList changes
    React.useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(achievementList)) {
            updateData(achievementList);
        }
    }, [achievementList]);

    const handleAddAchievement = () => {
        setAchievementList([
            ...achievementList, 
            {
                title: '',
                description: '',
                keywords: []
            }
        ]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedList = [...achievementList];
        updatedList[index] = {
            ...updatedList[index],
            [name]: value
        };
        setAchievementList(updatedList);
    };

    const handleRemove = (index) => {
        setAchievementList(achievementList.filter((_, i) => i !== index));
    };

    const handleKeywordAdd = (achievementIndex, keyword) => {
        const updatedList = [...achievementList];
        updatedList[achievementIndex].keywords.push(keyword);
        setAchievementList(updatedList);
    };

    const handleKeywordRemove = (achievementIndex, keywordIndex) => {
        const updatedList = [...achievementList];
        updatedList[achievementIndex].keywords = updatedList[achievementIndex].keywords.filter((_, i) => i !== keywordIndex);
        setAchievementList(updatedList);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Achievements</h2>
            
            {achievementList.map((achievement, index) => (
                <AchievementItem 
                    key={index} 
                    achievement={achievement} 
                    index={index} 
                    handleChange={handleChange} 
                    handleRemove={handleRemove}
                    handleKeywordAdd={handleKeywordAdd}
                    handleKeywordRemove={handleKeywordRemove}
                />
            ))}
            
            <button 
                type="button" 
                onClick={handleAddAchievement} 
                className="flex items-center text-pink-500 hover:text-pink-700 mt-4"
            >
                <FaPlus className="mr-2" /> Add Another Achievement
            </button>
        </div>
    );
};

export default Achievement;