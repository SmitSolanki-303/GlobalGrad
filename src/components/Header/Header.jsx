
const Header = () => {
    return (
        <header className="px-4 sm:px-6 py-4 sm:py-6 sticky top-0 left-0 z-50 w-full bg-white flex justify-between">
            <div className="text-xl sm:text-2xl">
                <a
                    href="/"
                    className="font-montserrat font-medium"
                >
                    Smit Solanki
                </a>
            </div>

            <div className="flex space-x-10 text-xl sm:text-2xl font-montserrat">
                <a
                    href="/"
                    className=""
                >
                    Skills
                </a>

                <a
                    href="/"
                    className=""
                >
                    Education
                </a>

                <a
                    href="/"
                    className=""
                >
                    Work Experience
                </a>

                <a
                    href="/"
                    className=""
                >
                    Achievements
                </a>

                <a
                    href="/"
                    className=""
                >
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header

