import React from 'react';

interface Skill {
    category: string;
    icon: React.ReactNode;
    description: string;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        {
            category: "Frontend",
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-accent group-hover:text-accent-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            description: "HTML5, CSS3, JavaScript, React (Learning), Tailwind CSS"
        },
        {
            category: "Learning",
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-accent group-hover:text-accent-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            description: "TypeScript, Node.js, APIs, Responsive Design"
        },
        {
            category: "Tools",
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-accent group-hover:text-accent-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            description: "VS Code, Git, GitHub, Chrome DevTools, Figma"
        },
        {
            category: "Soft Skills",
            icon: (
                <svg className="w-12 h-12 mx-auto mb-4 text-accent group-hover:text-accent-light transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            description: "Problem Solving, Communication, Time Management, Teamwork"
        }
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & Learning</h2>
                    <p className="section-subtitle">Technologies I'm learning and skills I'm developing</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card group">
                            {skill.icon}
                            <h3 className="text-lg font-semibold mb-2 text-accent-light">
                                {skill.category}
                            </h3>
                            <p className="text-text-secondary text-sm">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;