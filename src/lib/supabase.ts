import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_URL_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_ANON_KEY_SUPABASE;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
