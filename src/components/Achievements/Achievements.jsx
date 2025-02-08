import AchievementsCard from "./AchivementsCard"
import { Trophy } from "lucide-react"

const achievementData = [
    {
        title: "Google Code-In Finalist",
        description: "Selected as Google Code-in Finalist from 4000 students from 77 different countries.",
        tags: ["Certification", "Award Letter", "Google Code-in Blog"],
    },
    {
        title: "GDSC Member",
        description: "Selected as Google Code-in Finalist from 4000 students from 77 different countries.",
        tags: ["Certification", "Goodies"],
    },
    
]

const Achievements = () => {
    return (
        <section id="achievements" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Achievements<span className="text-purple-600">.</span>
            </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
            {achievementData.map((achievement, index) => (
                <AchievementsCard key={index} {...achievement} index={index} />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Achievements

