/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        "./*.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                accent: '#3b82f6',
                'accent-light': '#60a5fa',
                'text-primary': '#f8fafc',
                'text-secondary': '#cbd5e1',
                'gradient-start': '#3b82f6',
                'gradient-end': '#8b5cf6'
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate'
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                slideUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(50px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-20px)'
                    }
                },
                glow: {
                    '0%': {
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                    },
                    '100%': {
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)'
                    }
                }
            },
            backdropBlur: {
                xs: '2px'
            },
            screens: {
                'xs': '475px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
}