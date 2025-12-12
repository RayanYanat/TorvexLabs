/*
  # Add service and budget columns to contact_submissions

  1. Changes
    - Add `service` column (text, nullable) to store the service type from chatbot
    - Add `budget` column (text, nullable) to store the budget range as a string
  
  2. Notes
    - These columns are nullable to maintain compatibility with existing contact form submissions
    - Service column stores values like "AI Automation", "Mobile App", etc.
    - Budget column stores values like "$5,000-$10,000", "$10,000-$25,000", etc.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'service'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN service text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'budget'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN budget text;
  END IF;
END $$;