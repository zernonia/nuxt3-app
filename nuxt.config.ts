import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: [
        "@supabase/supabase-js",
        "@supabase/postgrest-js",
        "@supabase/gotrue-js",
        "@supabase/realtime-js",
        "@supabase/storage-js",
      ],
    },
  },
  buildModules: ["nuxt-windicss"],
})
