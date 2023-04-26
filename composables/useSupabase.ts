
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nsorslktwhwctyyvrvcb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb3JzbGt0d2h3Y3R5eXZydmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxMDMwMDMsImV4cCI6MTk3ODY3OTAwM30.cNdmf0xx5YTzqyO7RtYWFzFNfwcYTdnl_1qp_d7VE2Q"

const useSupabase = () => {
    const supabase = createClient(supabaseUrl, supabaseKey)

    return {
        supabase,
    };

};

export default useSupabase