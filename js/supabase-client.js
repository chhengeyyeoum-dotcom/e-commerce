"use strict";

(() => {
    const SUPABASE_URL = "https://yoqbgtqyenpafkrmmmfm.supabase.co";
    const SUPABASE_PUBLISHABLE_KEY = window.LUMEN_MOE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_WwrXey16r4pjI3r6pbB5cg_zFuZGxrB";

    const supabaseFactory = window.supabase?.createClient;
    const client = supabaseFactory && SUPABASE_PUBLISHABLE_KEY
        ? supabaseFactory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
        : null;

    window.LumenSupabaseConfig = Object.freeze({
        url: SUPABASE_URL,
        publishableKey: SUPABASE_PUBLISHABLE_KEY,
        isConfigured: Boolean(client),
        client
    });
})();
