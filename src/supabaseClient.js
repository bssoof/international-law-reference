
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bufakaksnwpcljmyrohj.supabase.co'
const supabaseAnonKey = 'sb_publishable_QCE5SPvtTWqf7vz8oU6K_A_EVGNTd21'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
