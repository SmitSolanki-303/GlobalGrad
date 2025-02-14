"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, User, Mail, MessageSquare } from "lucide-react"

const Contact = () => {
    const [pending, setPending] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPending(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setMessage("Thanks for your message! I'll get back to you soon.")
        setPending(false)
    }

    return (
        <section
        id="contact"    
        className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32"
        >
        <div className="max-w-4xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
                Get in Touch<span className="text-purple-600">.</span>
            </h2>
            <p className="text-gray-600 text-lg">Have a question or want to work together?</p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
            >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Name
                </label>
                <div className="relative">
                    <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors pl-10"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                </label>
                <div className="relative">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors pl-10"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                </label>
                <div className="relative">
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors pl-10"
                    />
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                </div>
                </div>
                <motion.button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                disabled={pending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                {pending ? (
                    <span className="flex items-center">
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        ></circle>
                        <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Sending...
                    </span>
                ) : (
                    <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                    </span>
                )}
                </motion.button>
            </form>
            {message && (
                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-center mt-4 text-green-600 "
                >
                {message}
                </motion.p>
            )}
            </motion.div>
        </div>
        </section>
    )
}

export default Contact

