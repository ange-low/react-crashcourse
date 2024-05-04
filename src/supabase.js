import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mwhlxpaxpcawyebsbykn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aGx4cGF4cGNhd3llYnNieWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTY5NTYsImV4cCI6MjAzMDEzMjk1Nn0.p7_ePiJuMnp_DPJ80tErfk-AvqPHUrfPU6y0o52Nozc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
