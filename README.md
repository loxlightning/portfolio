# Modern Portfolio Website

A responsive, modern portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, dark theme, and professional layout.

## 🚀 Features

- **Modern Design**: Clean, professional layout with a cohesive dark color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend**: React.js 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal introduction with statistics and skills overview
3. **Projects**: Showcase of featured projects with technologies used
4. **Skills**: Technical skills organized by category
5. **Contact**: Contact form and social media links

## 🎨 Design Features

- **Color Scheme**: Modern dark theme with blue accent colors
- **Typography**: Inter font family for clean, readable text
- **Animations**: Fade-in, slide-up, and floating animations
- **Interactive Elements**: Hover effects and smooth transitions
- **Gradient Effects**: Subtle gradients for visual appeal

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Secondary background
  accent: '#3b82f6',       // Blue accent
  'accent-light': '#60a5fa' // Light blue
}
```

### Content
- Update personal information in each component
- Replace project data in `Projects.tsx`
- Modify skills in `Skills.tsx`
- Update contact information in `Contact.tsx`

### Images
- Replace project images with your own
- Update image URLs in the projects array
- Add your own profile picture if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors
- Screen reader friendly
- Focus indicators

## 🔧 Performance

- Lazy loading for images
- Optimized animations with `prefers-reduced-motion`
- Efficient CSS with Tailwind's purging
- Code splitting with React
- Optimized bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS