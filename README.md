# Rootfuse - Cannabis Operations Management Software

## Overview
Rootfuse is a comprehensive cannabis operations management platform that provides cultivation, processing, and dispensary management in one unified dashboard.

## Features
- METRC Integration
- Compliance Tracking
- Inventory Management
- AI Automation
- Multi-location Support
- Real-time Analytics

## Tech Stack
- Next.js 14
- Supabase
- Stripe
- Tailwind CSS
- TypeScript

## Environment Variables
Required environment variables (set in Vercel dashboard):

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
SUPABASE_PROJECT_ID=your_supabase_project_id
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_SITE_URL=https://positivevibes955-4656.vercel.app
NEXT_PUBLIC_TEMPO=true
```

## Deployment
This app is configured for Vercel deployment with:
- Standalone output mode
- Optimized image handling
- Security headers
- API route handling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables

3. Run development server:
```bash
npm run dev
```

## Build
```bash
npm run build
```

## License
Proprietary - All rights reserved