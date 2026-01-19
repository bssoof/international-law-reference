import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

// ⚠️ IMPORTANT: These keys are hardcoded for the demo.
// In a production app, use 'react-native-dotenv' or Expo EAS Secrets.
const SUPABASE_URL = 'https://bufakaksnwpcljmyrohj.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_QCE5SPvtTWqf7vz8oU6K_A_EVGNTd21'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        storage: null, // No auth persistence for this simple demo yet (or use AsyncStorage)
        autoRefreshToken: true,
        persistSession: false,
        detectSessionInUrl: false,
    },
})

// Optional: Handle AppState changes if you want to refresh auth tokens, etc.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})
