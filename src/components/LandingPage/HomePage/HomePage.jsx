import React from 'react'
import { motion } from "framer-motion"
import bannerImage from "./414.jpg"
import f1 from "./f1.jpg"
import f2 from "./f2.jpg"
import f3 from "./f3.jpg"
import p1 from "./home_p1.jpg"

function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <div className=' mx-auto container md:px-20 px-4 flex flex-col md:flex-row '>
                {/* Text Content */}
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-40'>
                    <h1 className='text-7xl font-bold leading-tight'>
                        The Most Popular
                        <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-700 hover:via-pink-700 hover:to-red-700'> Portfolio Builder</span> Tool !!!
                    </h1>
                    <p className='mt-5 md:mt-10 mb-5 md:mb-10'>
                        Create beautiful, customizable portfolios with ease using our powerful, user-friendly tool.
                        Showcase your skills, projects, and achievements with interactive and professional portfolio designs.
                    </p>
                    <div className='flex flex-row gap-2'>
                        <button className='w-1/3 p-3 md:p-4 text-xl rounded-full bg-cyan-500 hover:bg-pink-400 text-white hover:text-black transition-colors duration-300'>
                            Start Building
                        </button>
                        <button className='w-1/3 p-3 md:p-4 text-xl rounded-full border-2 border-cyan-500 hover:border-pink-400 text-cyan-500 hover:text-pink-400 transition-colors duration-300'>
                            Explore Designs
                        </button>
                    </div>
                </div>

                {/* Banner Image */}
                <motion.div
                    className="z-10 order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center relative overflow-hidden mt-12 md:mt-40"
                    whileHover={{ scale: 1.02, rotate: -2 }}
                >
                    <motion.img
                        src={bannerImage}
                        alt="Banner Image"
                        className="w-full h-full md:h-[500px] object-cover rounded-xl shadow-lg ml-5"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                    />
                </motion.div>
            </div>

            {/* Features Section */}
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10 md:gap-16 my-10'>
                    <div className='flex flex-row items-center'>
                        <img src={f1} alt="Generate Portfolio" className="w-20 h-20 border rounded-xl mr-3" />
                        <span className="text-md font-semibold">Generate the Portfolio Easily</span>
                    </div>

                    <div className='flex flex-row items-center'>
                        <img src={f2} alt="Deployed Portfolio" className="w-20 h-20 border rounded-xl mr-3" />
                        <span className="text-md font-semibold">Deployed Portfolio Link</span>
                    </div>

                    <div className='flex flex-row items-center'>
                        <img src={f3} alt="Save Time" className="w-20 h-20 border rounded-xl mr-3" />
                        <span className="text-md font-semibold">Save Time</span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className='max-w-screen-2xl mx-auto md:px-60 px-4 text-justify'>
                <p className="text-gray-700 leading-relaxed mb-10">
                    At <strong>GlobalGrad</strong>, we empower students and professionals to build stunning, customizable portfolios with ease. 
                    Our platform simplifies the process of showcasing your skills, projects, and achievements in a visually compelling and interactive way. 
                    Whether you're a designer, developer, writer, or freelancer, <strong>GlobalGrad</strong> helps you create a strong digital presence that stands out.
                    <br /><br />
                    With an intuitive interface and powerful customization options, we make portfolio building effortless—so you can focus on what matters most: 
                    your career growth and personal brand.
                </p>

                <div className='flex flex-col items-center'>
                    <img 
                        src={p1} 
                        alt="Homepage first image" 
                        className='w-full h-full border rounded-md'
                    />
                </div>

                {/* <p className="text-gray-700 leading-relaxed py-10">
                    Turn your achievements, projects, and experiences into a stunning online presence. Our intelligent portfolio 
                    generator creates personalized websites that perfectly showcase your unique journey and talents.
                </p> */}
                <p className="text-gray-700 leading-relaxed py-10">
                    GlobalGrad is the ultimate portfolio website generator designed to help you create a stunning digital portfolio 
                    effortlessly. Simply input your details, select from professionally crafted templates, and get a personalized 
                    website that showcases your skills, experience, and projects beautifully. Our seamless drag-and-drop editor 
                    ensures an easy-to-use experience, letting you focus on what matters—your work. Whether you're a student, 
                    freelancer, or professional, GlobalGrad empowers you to stand out.
                </p>
            </div>
        </>
    )
}

export default HomePage