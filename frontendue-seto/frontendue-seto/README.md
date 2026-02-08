# Course Selling Platform - Astro

Modern course selling platform built with Astro, designed for static content delivery with dynamic article fetching from backend.

## Features

- **Course Display** - Static course listings with pricing
- **Daily Articles** - Fetch articles from WordPress/backend API
- **Weekly Promotions** - Manage and display promotional offers
- **Payment Integration** - Stripe payment gateway integration
- **Responsive Design** - Mobile-friendly interface
- **Fast Performance** - Built with Astro for optimal performance

## Project Structure

```
src/
├── api/              # API utilities
│   ├── backend.ts   # Backend API calls
│   └── payment.ts   # Stripe integration
├── components/       # Reusable components
│   ├── CourseCard.astro    # Course display
│   └── ArticleCard.astro   # Article display
├── layouts/         # Page layouts
│   └── Layout.astro # Main layout
└── pages/           # Routes
    ├── index.astro      # Courses listing
    ├── articles.astro   # Articles page
    └── promo.astro      # Promotions page

public/             # Static assets
package.json        # Dependencies
astro.config.mjs    # Astro configuration
tsconfig.json       # TypeScript configuration
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
BACKEND_API_URL=http://localhost:8000
STRIPE_PUBLIC_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

## Installation

1. **Install Node.js** (v18 or higher) - [Download here](https://nodejs.org/)

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
# Edit .env with your actual keys
```

## Development

Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000

## Building

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Integration Guide

### Backend Integration

Update course/article data by modifying API calls in:
- `src/api/backend.ts` - Replace mock data fetch with real API calls

**Example for articles from WordPress:**

```typescript
export async function fetchArticles() {
  const response = await fetch(`${import.meta.env.BACKEND_API_URL}/wp-json/wp/v2/posts`);
  return await response.json();
}
```

### Payment Gateway Setup

1. Get Stripe keys from [Stripe Dashboard](https://dashboard.stripe.com/)
2. Add keys to `.env`
3. Test with Stripe test card: `4242 4242 4242 4242`

## Configuration

### Update Stripe Keys

Edit `.env`:
```env
STRIPE_PUBLIC_KEY=pk_live_your_production_key
STRIPE_SECRET_KEY=sk_live_your_production_key
```

### Change Backend URL

Edit `astro.config.mjs` or `.env` for your backend API endpoint.

## Deployment

### Vercel (Recommended for Astro)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in dashboard
4. Deploy

### Other Platforms

Works with any Node.js hosting:
- Netlify
- AWS
- DigitalOcean
- etc.

## Next Steps

1. Replace mock data with real API calls
2. Add database for promotions
3. Implement user authentication if needed
4. Add email notifications
5. Set up analytics

## Support

For issues or questions, check:
- [Astro Documentation](https://docs.astro.build)
- [Stripe Documentation](https://stripe.com/docs)
