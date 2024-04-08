import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://parestbrefznnzxaeutf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhcmVzdGJyZWZ6bm56eGFldXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDE0MzEsImV4cCI6MjAyNTk3NzQzMX0.aavQr91kgI5bOvHXwtoSDvX5PikQNBrgPWLEUT_UquQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
