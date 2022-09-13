
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nsorslktwhwctyyvrvcb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb3JzbGt0d2h3Y3R5eXZydmNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MzEwMzAwMywiZXhwIjoxOTc4Njc5MDAzfQ.QWfQ1QtJRvidDaAEY1GdRKkkRN7XNxtwovzaVeL8qlo"

const useSupabase = () => {
    const supabase = createClient(supabaseUrl, supabaseKey)

    return {
        supabase,
    }

}

export default useSupabase