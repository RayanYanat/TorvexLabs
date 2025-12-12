/*
  # Create Leads Table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `full_name` (text) - Full name of the lead
      - `company_name` (text) - Company name of the lead
      - `email` (text) - Email address of the lead
      - `service` (text) - Service they're interested in
      - `budget` (text) - Budget range
      - `message` (text) - Additional message from the lead
      - `created_at` (timestamptz) - Timestamp when lead was created

  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to insert leads
    - Add policy for authenticated users to read all leads
    - Add policy for public (unauthenticated) users to insert leads for form submissions

  3. Indexes
    - Add unique index on email to prevent duplicate submissions
    - Add index on created_at for efficient sorting

  4. Important Notes
    - Email is unique to prevent duplicate lead submissions
    - Public insert policy allows form submissions without authentication
    - created_at automatically set to current timestamp on insert
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL DEFAULT '',
  company_name text NOT NULL DEFAULT '',
  email text NOT NULL,
  service text NOT NULL DEFAULT '',
  budget text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create unique index on email to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS leads_email_unique_idx ON leads(email);

-- Create index on created_at for efficient sorting
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public (unauthenticated) users to insert leads
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to insert leads
CREATE POLICY "Authenticated users can insert leads"
  ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all leads
CREATE POLICY "Authenticated users can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update leads
CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete leads
CREATE POLICY "Authenticated users can delete leads"
  ON leads
  FOR DELETE
  TO authenticated
  USING (true);