import React from 'react'
import HeroImage from './mockup.png'

const IntroductionPage = () => {
    return (
        <main className='w-screen overflow-hidden flex px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 '>
            <div className='w-1/2 flex flex-col justify-center'>
                <h1 className='font-semibold text-2xl sm:w-4xl md:text-6xl'>
                    Hi all, I'm <span className="text-purple-600">Smit</span>
                </h1>
                <p className='h-4 sm:h-6 md:h-8'></p>
                <p className='text-lg sm:text-xl md:text-2xl text-gray-600'>
                    A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications 
                    with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                </p>
                <p className='h-4 sm:h-6 md:h-8'></p>
                <div className='flex flex-row space-x-8 ml-5'>
                    {/* Github */}
                    <div className="group relative">
                        <button>
                            <svg 
                                strokeLinejoin="round" 
                                strokeLinecap="round" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                className="w-8 hover:scale-125 duration-200 hover:stroke-purple-400"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </button>
                        <span 
                            className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                        >
                            GitHub
                        </span>
                    </div>

                    {/* Linkedin */}
                    <div className="group relative">
                        <button>
                            <svg 
                                strokeLinejoin="round" 
                                strokeLinecap="round" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                className="w-8 hover:scale-125 duration-200 hover:stroke-purple-400"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                            </svg>
                        </button>
                        <span 
                            className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                        >
                            LinkedIn
                        </span>
                    </div>
                </div>
                <p className='h-4 sm:h-6 md:h-8'></p>
                <button 
                    className="cursor-pointer w-fit h-12 text-white font-bold shadow-md hover:scale-[1.1] shadow-purple-400 rounded-lg px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800 flex justify-center items-center"
                >
                    <span>
                        Download my Resume
                    </span>
                </button>
            </div>

            <div className='w-2/2 flex justify-center'>
                <img
                    src={HeroImage}
                    className='w-full h-fit object-cover'
                />
            </div>
        </main>
    )
}

export default IntroductionPage
