# Torvex Labs Website

A modern, responsive website for Torvex Labs built with React, TypeScript, Vite, and Supabase.

## Features

- AI Automation Solutions
- Mobile App Development
- Web Development Services
- Interactive Chatbot for Lead Generation
- Contact Form Integration
- Portfolio Showcase
- Blog Section

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Database:** Supabase
- **Hosting:** Netlify
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Fill in your Supabase credentials in the `.env` file:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser to `http://localhost:5173`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Configure environment variables in Netlify dashboard
4. Deploy

**Important:** Never commit the `.env` file. Configure environment variables in the Netlify dashboard.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/      # React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── context/        # React context providers
├── lib/            # Utility libraries
└── App.tsx         # Main application component

supabase/
├── migrations/     # Database migrations
└── functions/      # Edge functions
```

## Environment Variables

Required environment variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Security

- All database tables use Row Level Security (RLS)
- No secrets are committed to the repository
- Environment variables are injected at build time
- CSP-compliant code (no eval, no unsafe-inline)
