import React from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Personal Portfolio",
            description: "My first portfolio website built with React and Tailwind CSS. Features responsive design, smooth animations, and showcases my learning journey.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
            technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "To-Do List App",
            description: "A simple but functional to-do list application where I learned about state management, local storage, and basic CRUD operations.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
            technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Weather App",
            description: "My first API project! A weather app that fetches data from OpenWeather API and displays current weather conditions for any city.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
            technologies: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Calculator",
            description: "A functional calculator built with vanilla JavaScript. Helped me practice DOM manipulation and basic programming logic.",
            image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=300&fit=crop",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Landing Page",
            description: "A responsive landing page for a fictional business. Focused on learning CSS Grid, Flexbox, and responsive design principles.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">My Learning Projects</h2>
                    <p className="section-subtitle">Projects I've built while learning web development</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                                loading="lazy"
                            />

                            <h3 className="text-xl font-semibold mb-3 text-accent-light">
                                {project.title}
                            </h3>

                            <p className="text-text-secondary mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="inline-block bg-accent/20 text-accent text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href={project.liveUrl}
                                    className="text-accent hover:text-accent-light transition-colors duration-300 flex items-center space-x-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>

                                <a
                                    href={project.githubUrl}
                                    className="text-accent hover:text-accent-light transition-colors duration-300 flex items-center space-x-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;