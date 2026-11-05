"use strict";

(() => {
    const status = document.getElementById("dashboardStatus");
    const copy = document.getElementById("dashboardCopy");
    const logoutButton = document.getElementById("logoutButton");

    const setStatus = (message, type = "") => {
        status.textContent = message;
        status.className = `admin-status${type ? ` ${type}` : ""}`;
    };

    const redirectToLogin = () => {
        window.location.replace("./login.html");
    };

    const checkAccess = async () => {
        const client = window.LumenSupabaseConfig?.client;
        if (!client) {
            setStatus("Administrator authentication is not configured.", "error");
            return;
        }

        try {
            const { data: sessionData, error: sessionError } = await client.auth.getSession();
            if (sessionError) {
                throw sessionError;
            }
            if (!sessionData.session) {
                redirectToLogin();
                return;
            }

            const { data: membership, error: membershipError } = await client
                .from("admin_users")
                .select("user_id")
                .eq("user_id", sessionData.session.user.id)
                .maybeSingle();
            if (membershipError) {
                throw membershipError;
            }
            if (!membership) {
                setStatus("Your account is not authorized for administrator access.", "error");
                return;
            }

            setStatus("Authenticated administrator.");
            copy.hidden = false;
        } catch (error) {
            console.error("Administrator access check failed", error);
            setStatus("Administrator access could not be verified.", "error");
        }
    };

    logoutButton.addEventListener("click", async () => {
        const client = window.LumenSupabaseConfig?.client;
        logoutButton.disabled = true;
        setStatus("Signing out...");

        try {
            if (!client) {
                throw new Error("Supabase client is unavailable");
            }
            const { error } = await client.auth.signOut();
            if (error) {
                throw error;
            }
            redirectToLogin();
        } catch (error) {
            console.error("Administrator logout failed", error);
            logoutButton.disabled = false;
            setStatus("We could not sign you out. Please try again.", "error");
        }
    });

    checkAccess();
})();
