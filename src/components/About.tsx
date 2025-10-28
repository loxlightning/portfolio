import React from 'react';

const About: React.FC = () => {
    const stats = [
        { number: '5+', label: 'Projects Built' },
        { number: '6+', label: 'Months Learning' },
        { number: '3+', label: 'Technologies' },
        { number: '100%', label: 'Passion for Code' }
    ];

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Aspiring web developer on a journey to build amazing things</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <div className="bg-gradient-to-br from-accent/20 to-gradient-end/20 p-8 rounded-2xl backdrop-blur-sm border border-accent/20">
                            <h3 className="text-2xl font-semibold mb-4 text-accent-light">Hello, I'm Learning to Code!</h3>

                            <p className="text-text-secondary mb-6 leading-relaxed">
                                I'm a beginner web developer who recently started my coding journey. I'm passionate about
                                learning new technologies and building projects that help me grow as a developer.
                            </p>

                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Currently focusing on frontend development with HTML, CSS, JavaScript, and React.
                                Every day is a new opportunity to learn something exciting and improve my skills!
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag">Quick Learner</span>
                                <span className="skill-tag">Detail Oriented</span>
                                <span className="skill-tag">Eager to Grow</span>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-up">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="text-3xl font-bold text-accent-light">{stat.number}</div>
                                    <div className="text-text-secondary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;