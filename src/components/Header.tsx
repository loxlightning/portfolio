import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav className="fixed top-0 w-full bg-primary/90 backdrop-blur-md z-50 border-b border-secondary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                            Jovan's Portfolio
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`nav-link capitalize ${activeSection === section ? 'text-accent-light' : ''
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md md:hidden">
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-2xl text-text-secondary hover:text-accent-light transition-colors duration-300 capitalize"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;