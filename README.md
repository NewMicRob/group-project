# Stylin Salon

Components - BookAppointment, Footer, HairStylists, Home, MainContent, Map, NavBar, PageLayout, ReviewForm, ServicePricing.

BookAppointment - Booking form with real-time validation, SweetAlert notifications, and stylist selection for appointment scheduling.

Footer - Collapsible footer containing contact info, quick links to all pages, and social media links with responsive design.  

HairStylists - Displays a scrolling marquee showcasing stylists and their specialties with smooth animations.

Home - Homepage component with welcome sections, salon history, about us, and responsive stylist cards display.

MainContent - Wrapper component for main content sections across pages.

Map - Interactive Leaflet map with 40% viewport scaling, location marker, and error fallback display.

NavBar - Responsive navigation bar with active page highlighting and gradient styling.

PageLayout - Main layout wrapper providing consistent structure with gradient backgrounds across all pages.

ReviewForm - Customer review submission with name validation, rating system, marquee display, and localStorage persistence.

ServicePricing - Interactive service pricing display with category tabs and animated service cards.

Routing - Next.js App Router - '/' Home page, '/Services' Services & Pricing, '/Booking' Appointment booking, '/FindUs' Location & Map, '/Reviews' Customer reviews.

StateManagement - Local state management with useState for forms, reviews, and UI interactions. Props drilling for review data between pages and components.

# Features
Design & UI
- Responsive design
- Modern gradient backgrounds
- Smooth animations and hover effects
- Styling with Tailwind CSS

Navigation & Routing
- Responsive nav bar with active page highlighting
- Next.js App Router for fast client-side navigation
- Collapsible footer with quick links
- 5 main pages: Home, Services, Booking, Find Us, Reviews

Appointment Booking
- Booking form with stylist selection
- Real-time form validation with visual feedback
- Email, phone, and name validation
- Date and time selection
- Service request customization
- Success notifications with SweetAlert2

Review System
- Customer review submission form
- Star rating system
- Optional name field with auto-fill fallback
- Review validation and error handling
- Animated marquee display of recent reviews
- localStorage persistence for reviews

Service Pricing
- Interactive service tabs
- Animated service cards with hover effects
- Pricing for all salon services
- Categories

Location & Map
- Interactive Leaflet map integration
- Responsive map sizing
- Location marker with popup information
- Error handling with fallback contact information

Stylist Showcase
- Animated marquee displaying all stylists
- Stylist specialties and bio information
- Smooth scrolling animations
- Responsive stylist cards on homepage

Technical Features
- Built with Next.js and React
- Turbopack for faster development builds
- Client-side state management
- Dynamic imports for performance optimization
- Form validation with real-time feedback
- Mobile-first responsive design
- Accessibility features

Performance
- Lazy loading components for better performance
- Fast page transitions with Next.js routing
- Efficient state management