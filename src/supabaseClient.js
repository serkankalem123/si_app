import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://beegwfvdcxwlxjrffrki.supabase.co';  // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZWd3ZnZkY3h3bHhqcmZmcmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTkzNDYsImV4cCI6MjA2ODE3NTM0Nn0.Tz3XhM8ZCFUH_sHbdqVDCxBfvZVjKx7jDafQmtlzvo0';                  // Replace with your public key

export const supabase = createClient(supabaseUrl, supabaseKey);
