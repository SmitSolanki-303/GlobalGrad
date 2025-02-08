import EducationCards from "./EducationCards"

const educationQualifications = [
    {
        universityName: "Sarvajanik University",
        courseName: "Bachelor's of Technology",
        courseStart: "August 2022",
        courseEnd: "June 2025",
        achievements: [
        "Ranked 1st in Academics.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ],
    },
    {
        universityName: "Gujarat Technological University",
        courseName: "Diploma in Engineering",
        courseStart: "August 2019",
        courseEnd: "June 2022",
        achievements: [
        "Ranked 1st in Academics.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        ],
    },
    {
        universityName: "Gujarat Board",
        courseName: "SSC",
        courseStart: "August 2018",
        courseEnd: "june 2019",
        achievements: [
        "Ranked 1st in Academics.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        ],
    },
]

const Education = () => {
    return (
        <section className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-12 text-left">
                Education Qualifications<span className="text-purple-600">.</span>
                </h2>

                <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
                {educationQualifications.map((education, index) => (
                    <EducationCards key={index} {...education} isLeft={index % 2 === 0} />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Education

