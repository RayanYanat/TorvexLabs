# Deployment Guide

## Environment Variables

This application requires the following environment variables to be configured in your Netlify dashboard:

### Required Variables

1. `VITE_SUPABASE_URL` - Your Supabase project URL
2. `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

### Setting Up Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variables:
   - Key: `VITE_SUPABASE_URL`
   - Value: Your Supabase URL (e.g., `https://your-project.supabase.co`)

   - Key: `VITE_SUPABASE_ANON_KEY`
   - Value: Your Supabase anonymous key

4. Save the variables
5. Trigger a new deployment

### Important Notes

- **Never commit `.env` files** to your repository
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Use `.env.example` as a template for local development
- For local development, create a `.env` file based on `.env.example`
- The Supabase anon key is designed to be public and included in client-side code
- Database security is enforced through Row Level Security (RLS) policies

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your actual values in the `.env` file

3. Start the development server:
   ```bash
   npm run dev
   ```

### Build Process

The build process will automatically inject the environment variables configured in Netlify into the built JavaScript files. This is expected behavior and necessary for the application to function.
