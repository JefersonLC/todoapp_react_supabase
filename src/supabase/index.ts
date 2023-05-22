import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://upyazxoomqqzdayefrij.supabase.co';
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
