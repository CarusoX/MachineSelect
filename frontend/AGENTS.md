# AGENTS.md - Machine 5900 Frontend

## Project Overview

**Machine 5900** is a premium car dealership (concesionaria) website built with Next.js 15. The project focuses on providing a boutique experience for car buyers and sellers, emphasizing premium vehicles with a sporty DNA.

### Key Business Information
- **Company**: Machine 5900 - Concesionaria multimarca
- **Domain**: https://www.machine5900.com.ar
- **Location**: Av. del Libertador 5900, CABA
- **Phone**: +54 11 4567 8900
- **Email**: ventas@machine5900.com.ar
- **WhatsApp**: +54 9 11 4567 8900

## Technical Stack

### Core Technologies
- **Framework**: Next.js 15.5.4 with App Router
- **Runtime**: Bun (package manager and runtime)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.21
- **React**: 19.1.0

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Build**: Turbopack enabled
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## Project Structure

```
frontend/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with header & metadata
│   └── page.tsx             # Homepage with all sections
├── public/                  # Static assets
│   ├── file.svg            # Logo (Machine Select)
│   └── [other icons]
├── package.json
├── tsconfig.json
└── [config files]
```

## Key Features & Sections

### 1. Sticky Header Navigation
- **Logo**: Machine Select with file.svg icon
- **Navigation**: Inicio, Sobre nosotros, Inventario, Contacto
- **Styling**: Glass morphism with backdrop blur
- **Responsive**: Mobile-first design

### 2. Hero Section
- **Tagline**: "El garaje boutique para los que aman manejar"
- **Stats**: 20+ años, 3.500 autos entregados, 4.9/5 satisfacción
- **CTAs**: "Ver inventario" and "Hablar con un asesor"

### 3. About Section
- **Company Story**: 20+ years in premium/sporty vehicles
- **2024 Goals**: Electrification, Machine Club membership, <48h delivery
- **Differentiators**: AI diagnostics, VR tours, 24/7 WhatsApp support

### 4. Inventory Section
- **Brands**: Toyota, BMW, Mercedes-Benz, Ford
- **Interactive**: Brand selector with vehicle details
- **Features**: Premium vehicles with detailed specs and pricing

### 5. Contact Section
- **Form**: Name, email, phone, interest type, message
- **Templates**: Pre-written email templates for common requests
- **WhatsApp**: Fixed floating button for immediate contact

## Design System

### Color Palette
- **Primary**: #f1c40f (Machine Yellow)
- **Secondary**: #34495e (Dark Blue-Gray)
- **Background**: #050a0e (Very Dark Blue)
- **Text**: White with opacity variations
- **Accents**: #f39c12 (Orange), #25d366 (WhatsApp Green)

### Typography
- **Primary**: Geist Sans (variable font)
- **Monospace**: Geist Mono
- **Weights**: 400, 500, 600, 700

### Components
- **Glass Cards**: Semi-transparent with backdrop blur
- **Glass Buttons**: Hover effects with shadows
- **Glass Chips**: Small status indicators
- **Section Cards**: Main content containers

## Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Animations**: Framer Motion for smooth transitions
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Key Patterns
- **Motion Components**: All major sections use Framer Motion
- **State Management**: React hooks (useState, useMemo)
- **Navigation**: Next.js Link components
- **Forms**: Controlled components with proper validation

### Performance
- **Images**: Next.js Image component with optimization
- **Fonts**: Google Fonts with next/font optimization
- **Build**: Turbopack for faster builds
- **Animations**: GPU-accelerated transforms

## Business Context

### Target Audience
- **Primary**: Car enthusiasts and premium vehicle buyers
- **Secondary**: People looking to sell/trade their vehicles
- **Tertiary**: Luxury car collectors and investors

### Value Propositions
1. **Curated Selection**: Hand-picked premium vehicles
2. **Digital Experience**: AI diagnostics, VR tours, online tracking
3. **Premium Service**: Detailing, express paperwork, same-day delivery
4. **Expert Team**: 20+ years of experience in sporty/premium cars

### Key Metrics
- **Experience**: 20+ years in business
- **Deliveries**: 3,500+ cars delivered
- **Satisfaction**: 4.9/5 customer rating
- **Response Time**: <30 minutes for inquiries
- **Processing**: <48 hours for paperwork

## Development Workflow

### Getting Started
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

### Current Branch
- **Branch**: `codex/add-sticky-header-with-logo-and-navigation`
- **Status**: Active development on header improvements
- **Focus**: Sticky header with logo and navigation enhancements

## Common Tasks

### Adding New Vehicles
1. Update `carInventory` array in `app/page.tsx`
2. Follow existing structure: brand, tagline, highlight, vehicles
3. Each vehicle needs: model, year, price, details array

### Modifying Contact Forms
1. Update form fields in contact section
2. Modify email templates in `contactTemplates` array
3. Update WhatsApp link if needed

### Styling Changes
1. Use Tailwind classes in components
2. Global styles in `app/globals.css`
3. Follow glass morphism design system
4. Maintain responsive design principles

## Important Notes

- **SEO**: Metadata configured for Spanish (es_AR) locale
- **Accessibility**: Semantic HTML with proper ARIA labels
- **Performance**: Optimized images and fonts
- **Mobile**: Responsive design with touch-friendly interactions
- **Analytics**: Ready for integration (not currently implemented)

## Future Enhancements

### Planned Features
- Machine Club membership system
- VR vehicle tours
- AI-powered vehicle diagnostics
- Real-time inventory updates
- Advanced filtering and search
- Customer portal integration

### Technical Improvements
- Performance monitoring
- A/B testing framework
- Advanced analytics
- PWA capabilities
- Offline functionality

---

*This document is maintained for AI agents working on the Machine 5900 frontend codebase. Last updated: December 2024*
