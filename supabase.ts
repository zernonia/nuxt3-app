import { createClient } from "@supabase/supabase-js"

const url = process.env.VITE_SUPABASE_URL || "https://ernhobnpmmupjnmxpfbt.supabase.co"
const key =
  process.env.VITE_SUPABASE_KEY ||
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA5ODU0NCwiZXhwIjoxOTI4Njc0NTQ0fQ.Z9bRrfaL2oGhSuyBckFcdcnRIJDelWJ1II98OnEtLO0`

export const supabase = createClient(url, key)
