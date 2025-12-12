import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.URL_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.ANON_KEY_SUPABASE;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const saveLead = async (leadData) => {
  const apiUrl = `${supabaseUrl}/functions/v1/leads-api/saveLead`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to save lead');
  }

  return await response.json();
};

export const getLeadByEmail = async (email) => {
  const apiUrl = `${supabaseUrl}/functions/v1/leads-api/getLeadByEmail?email=${encodeURIComponent(email)}`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to get lead');
  }

  return await response.json();
};

export const getLeads = async () => {
  const apiUrl = `${supabaseUrl}/functions/v1/leads-api/getLeads`;

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to get leads');
  }

  return await response.json();
};
