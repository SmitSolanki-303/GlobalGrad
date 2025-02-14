import React from 'react'
import HeroImage from './mockup.png'

const socialLinks = [
    {
        name: "GitHub",
        icon: (
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        )
    },
    {
        name: "LinkedIn",
        icon: (
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
        )
    }
]

const IntroductionPage = () => {

    const onButtonClick = () => {
        const pdfUrl = "src/components/IntroductionPage/SmitResume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "SmitResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="introduction" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-8">
                        Hi all, I'm <span className="text-purple-600">Smit</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-600">
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications 
                        with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                    </p>

                    <div className="flex gap-8 mb-12">
                        {socialLinks.map((social, index) => (
                            <div key={index} className="group relative">
                                <button>
                                    <svg 
                                        strokeLinejoin="round" 
                                        strokeLinecap="round" 
                                        strokeWidth={2} 
                                        stroke="currentColor" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        className="w-8 hover:scale-125 duration-200 hover:stroke-purple-600"
                                    >
                                        {social.icon}
                                    </svg>
                                </button>
                                <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    {social.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={onButtonClick}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-800 text-white font-bold shadow-md hover:scale-105 transition-all duration-300"
                    >
                        Download my Resume
                    </button>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={HeroImage}
                        alt="Hero illustration"
                        className="w-full h-auto object-cover rounded-2xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default IntroductionPage