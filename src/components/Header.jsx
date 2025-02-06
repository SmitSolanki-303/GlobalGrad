import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-95 backdrop-blur dark:bg-gray-800 dark:bg-opacity-95">
        <div className="container mx-auto flex h-14 items-center px-4">
            <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block">Smit Solanki</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link to="#about" className="transition-colors hover:text-gray-600 dark:hover:text-gray-300">
                About
                </Link>
                <Link to="#projects" className="transition-colors hover:text-gray-600 dark:hover:text-gray-300">
                Projects
                </Link>
                <Link to="#contact" className="transition-colors hover:text-gray-600 dark:hover:text-gray-300">
                Contact
                </Link>
            </nav>
            </div>
            <button className="ml-auto border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
            Resume
            </button>
            <ThemeToggle />
        </div>
        </header>
    )
}

export default Header

