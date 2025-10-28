// Modern Portfolio JavaScript - Enhanced with animations and interactivity

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initNavigation();
    initAnimations();
    initProjects();
    initSkills();
    initContactForm();
    initScrollIndicator();
    initThemeToggle();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Animation and scroll effects
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('#home');
        const floatingShapes = document.querySelector('.floating-shapes');

        if (heroSection && floatingShapes) {
            floatingShapes.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Projects data and rendering
function initProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
            technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Weather Dashboard",
            description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
            technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimized performance.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Social Media Dashboard",
            description: "A comprehensive social media analytics dashboard with real-time metrics, engagement tracking, and automated reporting.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
            technologies: ["React", "D3.js", "Express", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Learning Management System",
            description: "An educational platform with course management, progress tracking, interactive quizzes, and video streaming capabilities.",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
            technologies: ["Angular", "Spring Boot", "MySQL", "AWS"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    const projectsContainer = document.querySelector('#projects .grid');

    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-card loading">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="mb-4">
                    ${project.technologies.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Skills data and rendering
function initSkills() {
    const skills = [
        {
            category: "Frontend",
            icon: `<svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>`,
            description: "React, Vue.js, Angular, TypeScript, Tailwind CSS"
        },
        {
            category: "Backend",
            icon: `<svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>`,
            description: "Node.js, Express, Python, Django, REST APIs"
        },
        {
            category: "Database",
            icon: `<svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>`,
            description: "MongoDB, PostgreSQL, MySQL, Firebase"
        },
        {
            category: "Tools & DevOps",
            icon: `<svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>`,
            description: "Git, Docker, AWS, CI/CD, Webpack, Vite"
        }
    ];

    const skillsContainer = document.querySelector('#skills .grid');

    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-card loading">
                ${skill.icon}
                <h3>${skill.category}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('');
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Scroll progress indicator
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Theme toggle functionality (optional enhancement)
function initThemeToggle() {
    // This can be expanded to include light/dark theme switching
    // For now, it's a placeholder for future enhancement

    // Add smooth transitions to all elements
    document.documentElement.style.setProperty('--transition-duration', '0.3s');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(() => {
    // Handle scroll events efficiently
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}