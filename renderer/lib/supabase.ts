import { Database } from "@/interfaces/Database";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient<Database>(
  "https://qhanlmcdcexweinncffh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoYW5sbWNkY2V4d2Vpbm5jZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzE5ODQsImV4cCI6MjAyODc0Nzk4NH0.i-bNHRQoGbQjD8u-U51SrsDaJkjLTB5FYWY7dgY2Ao8"
);

export default supabase;
