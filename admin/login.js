"use strict";

(() => {
    const form = document.getElementById("loginForm");
    const status = document.getElementById("loginStatus");

    const setStatus = (message, type = "") => {
        status.textContent = message;
        status.className = `admin-status${type ? ` ${type}` : ""}`;
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const client = window.LumenSupabaseConfig?.client;
        if (!client) {
            setStatus("Administrator authentication is not configured.", "error");
            return;
        }

        const submitButton = form.querySelector("button");
        submitButton.disabled = true;
        setStatus("Signing in...");

        try {
            const formData = new FormData(form);
            const { error } = await client.auth.signInWithPassword({
                email: formData.get("email"),
                password: formData.get("password")
            });
            if (error) {
                throw error;
            }
            window.location.replace("./index.html");
        } catch (error) {
            console.error("Administrator login failed", error);
            setStatus("Sign-in failed. Check your email and password.", "error");
        } finally {
            submitButton.disabled = false;
        }
    });
})();
