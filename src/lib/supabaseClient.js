import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_URL_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_ANON_KEY_SUPABASE;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const saveLead = async (leadData) => {
  const existingLead = await supabaseClient
    .from('leads')
    .select('email')
    .eq('email', leadData.email)
    .maybeSingle();

  if (existingLead.data) {
    throw new Error('This email has already been submitted');
  }

  const { data, error } = await supabaseClient
    .from('leads')
    .insert([leadData])
    .select()
    .single();

  if (error) {
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
