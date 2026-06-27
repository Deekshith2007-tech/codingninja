# Coding Ninjas Website Clone

A complete React + Tailwind CSS clone of the Coding Ninjas website featuring a modern, responsive design with interactive components.

## Features

### Components
- **Header Navigation** - Sticky navigation with dropdown menus for professionals and students
- **Hero Section** - Eye-catching hero with animated elements and key stats (95% placement rate, 50K+ students, 500+ partners)
- **Course Finder** - Interactive form to help users find the perfect course based on experience and interests
- **Courses Section** - Grid of course cards with tabs for professionals and students
- **Course Cards** - Detailed cards showing course info, duration, enrollment, skills, and features
- **Features Section** - 6-column grid showcasing platform benefits
- **Testimonials** - Success stories from alumni working at top companies (Google, Amazon, Microsoft, etc.)
- **Footer** - Complete footer with links, contact info, and social media

### Design
- **Dark Theme** - Professional dark background (#0F1419) with secondary darker elements
- **Orange Accents** - Eye-catching orange (#FF6B35) buttons and highlights
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Smooth Animations** - Hover effects, transitions, and scroll behaviors
- **Modern UI** - Clean, professional design matching contemporary web standards

## Tech Stack

- **React** 18.2.0 - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** 3.3.0 - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefix handling

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation and header
│   ├── Hero.jsx             # Hero section with stats
│   ├── CourseFinder.jsx      # Course recommendation form
│   ├── CoursesSection.jsx    # Course grid with tabs
│   ├── CourseCard.jsx        # Individual course card component
│   ├── FeaturesSection.jsx   # Benefits and features
│   ├── TestimonialsSection.jsx # Success stories
│   └── Footer.jsx           # Footer with links
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
├── index.css                # Global styles and Tailwind
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind customization
└── postcss.config.js        # PostCSS configuration
```

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd qskill
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project

### Development Mode
```bash
npm run dev
```
Opens the app at `http://localhost:3000` with hot reload enabled.

### Production Build
```bash
npm run build
```
Creates an optimized build in the `dist` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0F1419',      // Dark background
  secondary: '#1A1F2E',    // Secondary dark
  accent: '#FF6B35',       // Orange accent
  'accent-light': '#FFB347' // Light orange
}
```

### Course Data
Update course information in `src/components/CoursesSection.jsx` - modify the `courses` object with your own course data.

### Testimonials
Edit testimonials in `src/components/TestimonialsSection.jsx` to add real user testimonials.

## Responsive Breakpoints

- **Mobile** - Below 768px (md)
- **Tablet** - 768px to 1024px (md to lg)
- **Desktop** - 1024px and above (lg)

## Key Features Implemented

✅ Fixed header navigation with dropdown menus
✅ Animated hero section with stats
✅ Interactive course finder form
✅ Tab-based course filtering (Professionals/Students)
✅ Feature cards with icons
✅ Testimonial cards with ratings
✅ Complete footer with contact info
✅ Mobile-responsive design
✅ Dark theme with orange accents
✅ Smooth animations and transitions
✅ Accessible color contrasts
✅ Form validation ready

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Form submission backend integration
- Course detail pages
- User authentication
- Enrollment system
- Payment integration
- Blog section
- Search functionality
- Advanced filtering

## License

This is a clone for educational purposes.

## Notes

- The course data is mock/sample data
- Contact information is placeholder
- Social media links are non-functional
- The course finder form is interactive but doesn't have backend integration

---

**Created with React, Tailwind CSS, and Vite** ⚡
