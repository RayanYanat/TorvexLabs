/*
  # Create contact submissions table

  ## Overview
  This migration creates a table to store contact form submissions from the Torvex Labs website.

  ## New Tables
  
  ### `contact_submissions`
  Stores all contact form submissions from potential clients.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text, required) - Name of the person submitting the form
  - `email` (text, required) - Email address for follow-up
  - `company` (text, optional) - Company name if provided
  - `message` (text, required) - Message or inquiry details
  - `created_at` (timestamptz) - Timestamp when the submission was created
  - `status` (text) - Status of the inquiry (new, contacted, closed)
  
  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on the `contact_submissions` table
  - Public users can INSERT their own submissions (no auth required for contact forms)
  - Only authenticated admin users can view submissions (for future admin panel)
  
  ## Notes
  - The table allows anonymous submissions since it's a public contact form
  - Email validation should be handled on the client side
  - Status field helps track follow-up progress
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view submissions (for admin access)
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update submissions (for status changes)
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);