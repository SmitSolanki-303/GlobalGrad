import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="px-4 sm:px-6 py-4 sm:py-6 sticky top-0 left-0 z-50 w-full bg-white flex justify-between">
            <div className="text-xl sm:text-2xl">
                <button
                    onClick={() => scrollToSection('introduction')}
                >
                    <span className="font-sans font-bold text-4xl text-purple-600">Smit Solanki</span>
                </button>
            </div>

            <div className="flex space-x-10 items-center text-xl sm:text-2xl font-montserrat">

                <button
                    onClick={() => scrollToSection('skills')}
                    className="hover:text-purple-600 transition-colors"
                >
                    Skills
                </button>

                <button
                    onClick={() => scrollToSection('education')}
                    className="hover:text-purple-600 transition-colors"
                >
                    Education
                </button>

                <button
                    onClick={() => scrollToSection('experience')}
                    className="hover:text-purple-600 transition-colors"
                >
                    Work Experience
                </button>

                <button
                    onClick={() => scrollToSection('achievements')}
                    className="hover:text-purple-600 transition-colors"
                >
                    Achievements
                </button>

                <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-purple-600 transition-colors"
                >
                    Contact Me
                </button>

                <div className="">
                    <ToggleSwitch/>
                </div>
            </div>
        </header>
    )
}

export default Header

