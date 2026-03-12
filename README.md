# Tarun Kumar - Portfolio

A modern, responsive portfolio website showcasing 9+ years of software engineering experience in game and app development.

## Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 16 for instant loading
- **Interactive Project Showcase**: Grid layout with detailed modal views
- **Smooth Animations**: Subtle animations for enhanced user experience
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Sections

1. **About** - Introduction and professional summary
2. **Achievements** - Key career highlights and accomplishments
3. **Tech Stack** - Technologies and tools expertise
4. **Professional Experience** - Detailed work history with timeline
5. **Projects** - Interactive grid of 9 major projects with detailed views
6. **Contact** - Multiple ways to get in touch

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── About.tsx           # About section component
│   ├── Achievements.tsx    # Achievements section component
│   ├── TechStack.tsx       # Tech stack section component
│   ├── Experience.tsx      # Professional experience timeline
│   ├── Projects.tsx        # Projects grid with modal integration
│   ├── Contact.tsx         # Contact form and information
│   ├── ProjectCard.tsx     # Reusable project card component
│   ├── DetailedView.tsx    # Reusable modal for project details
│   └── Navigation.tsx      # Fixed navigation bar
└── data/
    └── portfolio.ts        # All portfolio data and TypeScript types
```

## Key Components

### Reusable Components

- **ProjectCard**: Displays project summary with hover effects
- **DetailedView**: Modal popup showing full project details including tech stack, platforms, and achievements

### Performance Optimizations

- Component-based architecture for code splitting
- Optimized animations with CSS transforms
- Smooth scroll behavior
- Lazy loading ready (can be added for images)

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Customization

All portfolio content is centralized in `src/data/portfolio.ts`:

- Update personal information
- Add/remove projects
- Modify experience entries
- Change tech stack
- Update achievements

## Deployment

This portfolio is ready to deploy to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Build and deploy static files

## Features Highlight

### Interactive Projects

- Click any project card to see detailed information
- Modal view with full descriptions, achievements, and tech stack
- Keyboard navigation (ESC to close)
- Smooth transitions and animations

### Professional Timeline

- Visual timeline showing career progression
- Alternating layout for better readability
- Company-wise project grouping

### Contact Integration

- Direct email links
- Phone and LinkedIn integration
- Contact form with mailto functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Tarun Kumar. All rights reserved.
