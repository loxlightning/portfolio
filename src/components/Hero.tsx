import React from 'react';

const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
            <div className="floating-shapes"></div>

            <div className="relative z-10 text-center px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                        Aspiring Developer
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
                    Learning to build amazing web experiences, one project at a time
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="btn-primary"
                    >
                        See My Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-secondary"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;