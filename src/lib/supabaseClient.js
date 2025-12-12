import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_URL_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_ANON_KEY_SUPABASE;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const saveLead = async (leadData) => {
  const { data, error } = await supabaseClient
    .from('leads')
    .insert([leadData])
    .select()
    .single();

  if (error) {
    if (error.code === '23505' || error.message.includes('duplicate') || error.message.includes('unique')) {
      throw new Error('This email has already been submitted');
    }
    throw new Error(error.message || 'Failed to save lead');
  }

  return { success: true, data };
};

export const getLeadByEmail = async (email) => {
  const { data, error } = await supabaseClient
    .from('leads')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    throw new Error(error.message || 'Failed to get lead');
  }

  return { data };
};

export const getLeads = async () => {
  const { data, error } = await supabaseClient
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Failed to get leads');
  }

  return { data };
};
