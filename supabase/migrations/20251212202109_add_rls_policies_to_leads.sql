/*
  # Add RLS policies to leads table

  1. Changes
    - Add policy to allow anonymous users to insert leads
    - This enables the chatbot and other lead capture forms to work
  
  2. Security
    - INSERT policy allows anonymous submissions (public lead forms)
    - RLS is already enabled on this table
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'leads' 
    AND policyname = 'Allow anonymous lead submissions'
  ) THEN
    CREATE POLICY "Allow anonymous lead submissions"
      ON leads
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;