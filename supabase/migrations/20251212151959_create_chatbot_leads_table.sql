/*
  # Create chatbot_leads table

  1. New Tables
    - `chatbot_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Lead's full name
      - `email` (text) - Lead's email address
      - `service_type` (text) - Type of service (website, mobile_app, workflow_automation, crm_integration, appointment_setting, automated_support)
      - `project_details` (text) - Detailed description of the project
      - `budget` (text, nullable) - Budget range for website/mobile app projects
      - `created_at` (timestamptz) - Timestamp when lead was created
      - `status` (text) - Lead status (new, contacted, converted, archived)
      
  2. Security
    - Enable RLS on `chatbot_leads` table
    - Add policy for service role to insert leads (public form submission)
    - Add policy for authenticated users to read leads
*/

CREATE TABLE IF NOT EXISTS chatbot_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  project_details text NOT NULL,
  budget text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' NOT NULL
);

ALTER TABLE chatbot_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert chatbot leads"
  ON chatbot_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON chatbot_leads
  FOR SELECT
  TO authenticated
  USING (true);