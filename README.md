# Moneyfinacc - Next.js Landing Page

A modern, professional landing page for Moneyfinacc - Google Sheet trackers for businesses in Nepal.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Custom CSS with CSS Variables
- **State Management:** React Hooks
- **Build Tool:** Turbopack

## 📁 Project Structure

```
moneyfinacc-nextjs/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ErrorBoundary.tsx # Error handling wrapper
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with animations
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other section components
├── hooks/                 # Custom React hooks
│   ├── useScrollSpy.ts   # Navigation scroll detection
│   ├── useRevealOnScroll.ts # Scroll-based animations
│   └── useTheme.ts       # Theme management
├── lib/                   # Utilities and data
│   ├── constants.ts      # Application constants
│   ├── data.ts           # Content data
│   ├── helpers.ts        # Utility functions
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types
└── public/               # Static assets
    └── logo.png          # Brand logo
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📐 Architecture Decisions

### 1. Component Organization

- **Atomic Design**: Components are organized by functionality
- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: Common patterns extracted into shared components

### 2. Type Safety

- **Strict TypeScript**: Full type coverage across the application
- **Custom Types**: Centralized type definitions in `types/index.ts`
- **Type Inference**: Leveraging TypeScript's inference where possible

### 3. Performance Optimizations

- **Memoization**: `useMemo` and `useCallback` for expensive operations
- **Code Splitting**: Dynamic imports for large components
- **Optimized Images**: Next.js Image optimization
- **CSS Animations**: Hardware-accelerated transforms

### 4. Error Handling

- **Error Boundaries**: Graceful error recovery
- **Defensive Programming**: Null checks and fallbacks
- **Type Guards**: Runtime type validation where needed

### 5. Code Quality

- **Consistent Naming**: Clear, descriptive variable names
- **Documentation**: JSDoc comments for all public APIs
- **Constants**: Magic numbers extracted to named constants
- **DRY Principle**: Shared logic in utility functions

## 🎨 Styling Approach

### CSS Architecture

- **CSS Custom Properties**: Theme variables for consistency
- **Component Scoping**: Local styles per component
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Theme toggle with system preference detection

### Animation Strategy

- **Scroll-based**: IntersectionObserver for reveal animations
- **Performant**: Transform and opacity only
- **Reduced Motion**: Respects user preferences
- **Smooth Transitions**: Easing functions for natural feel

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables here if needed
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Constants

Application-wide constants are defined in `lib/constants.ts`:

- Animation timings
- SVG dimensions
- Navigation sections
- Contact information

## 📊 Performance Metrics

### Target Metrics

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Techniques

1. **Image Optimization**: WebP format with fallbacks
2. **Font Loading**: Preload critical fonts
3. **Critical CSS**: Inline above-the-fold styles
4. **JavaScript**: Minimize bundle size
5. **Lazy Loading**: Non-critical components loaded on demand

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📦 Build

```bash
# Production build
npm run build

# Analyze bundle size
npm run build -- --analyze
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with PM2

## 🔒 Security

- **No Secrets in Code**: Environment variables for sensitive data
- **Input Validation**: User inputs sanitized
- **HTTPS Only**: Secure connections enforced
- **CSP Headers**: Content Security Policy configured

## 🤝 Contributing

### Code Style

- Use TypeScript for all new files
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Write self-documenting code

### Git Workflow

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📄 License

Copyright © 2026 Moneyfinacc. All rights reserved.

## 🙋‍♂️ Support

For questions or issues, contact:
- Email: hello@moneyfinacc.com
- WhatsApp: +977 9876543210

---

Built with ❤️ for businesses in Nepal
