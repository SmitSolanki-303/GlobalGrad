"use client"
import { motion } from "framer-motion"
import HeroImage from "./SkillImage.jpg"

const skills = [
    { 
        name: "HTML", 
        color: "from-orange-400 to-orange-500",
        category: "Frontend"
    },
    { 
        name: "CSS", 
        color: "from-blue-400 to-blue-500",
        category: "Frontend"
    },
    { 
        name: "JavaScript", 
        color: "from-yellow-300 to-yellow-400",
        category: "Frontend"
    },
    { 
        name: "React", 
        color: "from-cyan-400 to-cyan-500",
        category: "Frontend"
    },
    { 
        name: "Node.js", 
        color: "from-green-400 to-green-500",
        category: "Backend"
    },
    { 
        name: "PHP", 
        color: "from-blue-500 to-blue-600",
        category: "Backend"
    },
    { 
        name: "Python", 
        color: "from-yellow-500 to-yellow-600",
        category: "Backend"
    },
    { 
        name: "Git", 
        color: "from-red-400 to-red-500",
        category: "Tools"
    }
]

const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section id="skills" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div 
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-cyan-200 rounded-3xl blur-3xl opacity-30" />
                            <img 
                                src={HeroImage || "/placeholder.svg"} 
                                alt="Tech illustration" 
                                className="relative w-full h-auto max-w-lg object-cover rounded-2xl shadow-xl" 
                            />
                        </div>
                    </motion.div>

                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-8">
                                My Tech Stack<span className="text-purple-600">.</span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-600">
                                Technologies I've mastered to create exceptional digital experiences:
                            </p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index} 
                                    className="group relative"
                                    variants={itemVariants}
                                >
                                    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${skill.color} p-4 shadow-md 
                                        transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                                    >
                                        <div className="absolute top-0 right-0 p-2 text-xs font-medium text-white/70">
                                            {skill.category}
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <h3 className="text-white font-semibold">
                                                    {skill.name}
                                                </h3>
                                                <div className="h-1 w-0 bg-white/30 transition-all duration-300 group-hover:w-full rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack