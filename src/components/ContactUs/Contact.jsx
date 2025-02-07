import { useState } from "react"

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
        <section id="contact" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
            </h2>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                    </label>
                    <input id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    disabled={pending}
                >
                    {pending ? "Sending..." : "Send Message"}
                </button>
                {message && <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">{message}</p>}
                </form>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Contact

