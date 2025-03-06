import React, { useState } from 'react';
import { FaProjectDiagram, FaPlus, FaTrash, FaGithub } from "react-icons/fa";

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";

const ProjectItem = ({ project, index, handleChange, handleRemove, handleTechAdd, handleTechChange, handleTechRemove }) => {
    return (
        <div className="p-6 border border-gray-200 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                    <FaProjectDiagram className="mr-2 text-pink-500" />
                    Project #{index + 1}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={project.title} 
                        onChange={(e) => handleChange(index, e)} 
                        className={inputClass} 
                        placeholder="Enter project title" 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                    <textarea 
                        name="description" 
                        value={project.description} 
                        onChange={(e) => handleChange(index, e)} 
                        className={`${inputClass} h-24`} 
                        placeholder="Describe your project and its purpose" 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Link</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaGithub className="text-gray-400" />
                        </div>
                        <input 
                            type="url" 
                            name="githubLink" 
                            value={project.githubLink} 
                            onChange={(e) => handleChange(index, e)} 
                            className={`${inputClass} pl-10`} 
                            placeholder="https://github.com/username/project" 
                        />
                    </div>
                </div>
                
                {/* Tech Skills Used */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.techSkills.map((tech, techIndex) => (
                            <div key={techIndex} className="flex items-center bg-pink-50 rounded-full px-3 py-1">
                                <span className="text-sm text-pink-700 mr-2">{tech}</span>
                                <button 
                                    type="button" 
                                    onClick={() => handleTechRemove(index, techIndex)} 
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
                            value={project.newTech || ''} 
                            onChange={(e) => handleChange(index, { target: { name: 'newTech', value: e.target.value }})} 
                            className={`${inputClass} mr-2`} 
                            placeholder="Add technology (e.g., React, Node.js)" 
                        />
                        <button 
                            type="button" 
                            onClick={() => {
                                if (project.newTech?.trim()) {
                                    handleTechAdd(index, project.newTech);
                                    handleChange(index, { target: { name: 'newTech', value: '' }});
                                }
                            }} 
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

const ProjectDetails = ({ data, updateData }) => {
    // Initialize with one empty project item if data is empty
    const [projectList, setProjectList] = useState(
        data.length > 0 ? data : [
            {
                title: '',
                description: '',
                githubLink: '',
                techSkills: [],
                newTech: ''
            }
        ]
    );
    
    // Update parent component when projectList changes
    React.useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(projectList)) {
            updateData(projectList);
        }
    }, [projectList]);

    const handleAddProject = () => {
        setProjectList([
            ...projectList, 
            {
                title: '',
                description: '',
                githubLink: '',
                techSkills: [],
                newTech: ''
            }
        ]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedList = [...projectList];
        updatedList[index] = {
            ...updatedList[index],
            [name]: value
        };
        setProjectList(updatedList);
    };

    const handleRemove = (index) => {
        setProjectList(projectList.filter((_, i) => i !== index));
    };

    const handleTechAdd = (projectIndex, tech) => {
        const updatedList = [...projectList];
        updatedList[projectIndex].techSkills.push(tech);
        setProjectList(updatedList);
    };

    const handleTechChange = (projectIndex, techIndex, value) => {
        const updatedList = [...projectList];
        updatedList[projectIndex].techSkills[techIndex] = value;
        setProjectList(updatedList);
    };

    const handleTechRemove = (projectIndex, techIndex) => {
        const updatedList = [...projectList];
        updatedList[projectIndex].techSkills = updatedList[projectIndex].techSkills.filter((_, i) => i !== techIndex);
        setProjectList(updatedList);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Project Details</h2>
            
            {projectList.map((project, index) => (
                <ProjectItem 
                    key={index} 
                    project={project} 
                    index={index} 
                    handleChange={handleChange} 
                    handleRemove={handleRemove}
                    handleTechAdd={handleTechAdd}
                    handleTechChange={handleTechChange}
                    handleTechRemove={handleTechRemove}
                />
            ))}
            
            <button 
                type="button" 
                onClick={handleAddProject} 
                className="flex items-center text-pink-500 hover:text-pink-700 mt-4"
            >
                <FaPlus className="mr-2" /> Add Another Project
            </button>
        </div>
    );
};

export default ProjectDetails;