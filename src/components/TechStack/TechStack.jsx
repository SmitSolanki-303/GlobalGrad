import HeroImage from "./mockup.png"

const TechStack = () => {
    const skills = [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "JavaScript", color: "bg-yellow-400" },
        { name: "React", color: "bg-cyan-400" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Python", color: "bg-yellow-600" },
        { name: "Git", color: "bg-red-500" },
        
    ]

    return (
        <section id="skills" className="w-screen overflow-hidden flex px-4 sm:px-6 md:px-8 py-4 md:py-6 md:py-8">
        <div className="w-1/2 flex justify-center">
            <img src={HeroImage || "/placeholder.svg"} className="w-full h-fit object-cover" alt="Tech illustration" />
        </div>

        {/* Skills */}
        <div className="w-1/2 flex flex-col justify-center">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                My Tech Stack<span className="text-purple-600">.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600">Here are some of the technologies I work with:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="group relative">
                    <div
                        className={`flex items-center justify-center p-4 rounded-lg ${skill.color} text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                        <span className="text-sm font-medium cursor-default">{skill.name}</span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default TechStack

