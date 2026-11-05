"use strict";

(() => {
    const form = document.getElementById("setupForm");
    const intro = document.getElementById("setupIntro");
    const status = document.getElementById("setupStatus");
    const loginLink = document.getElementById("setupLoginLink");
    const resetForm = document.getElementById("resetForm");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("passwordConfirmation");
    const resetEmail = document.getElementById("resetEmail");
    const resetRedirectUrl = "https://lumenmoe.com/admin/setup.html";

    const setStatus = (message, type = "") => {
        status.textContent = message;
        status.className = `admin-status${type ? ` ${type}` : ""}`;
    };

    const showFailure = (message) => {
        form.hidden = true;
        intro.textContent = "This administrator link can no longer be used.";
        setStatus(message, "error");
        loginLink.hidden = false;
    };

    const removeSensitiveUrlParts = () => {
        window.history.replaceState({}, document.title, window.location.pathname);
    };

    const getInvitationSession = async (client) => {
        const invitationUrl = new URL(window.location.href);
        const code = invitationUrl.searchParams.get("code");
        const hashParams = new URLSearchParams(invitationUrl.hash.slice(1));
        const linkType = hashParams.get("type");
        const hasAuthToken = ["invite", "recovery"].includes(linkType) && Boolean(hashParams.get("access_token"));
        const hasAuthLink = Boolean(code) || hasAuthToken;
        removeSensitiveUrlParts();

        if (!hasAuthLink) {
            return null;
        }

        if (code) {
            const { error } = await client.auth.exchangeCodeForSession(code);
            if (error) {
                throw error;
            }
        }

        const { data, error } = await client.auth.getSession();
        if (error) {
            throw error;
        }
        return data.session;
    };

    const initialize = async () => {
        const client = window.LumenSupabaseConfig?.client;
        if (!client) {
            showFailure("Administrator authentication is not configured.");
            return;
        }

        try {
            const session = await getInvitationSession(client);
            if (!session) {
                showFailure("The administrator link is missing, expired, or invalid.");
                return;
            }

            intro.textContent = "Choose a new password for your administrator account.";
            form.hidden = false;
        } catch (error) {
            console.error("Administrator password-link setup failed", error);
            showFailure("The administrator link is missing, expired, or invalid.");
        }
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (password.value.length < 8) {
            setStatus("Password must be at least 8 characters.", "error");
            return;
        }
        if (password.value !== confirmation.value) {
            setStatus("Passwords do not match.", "error");
            return;
        }

        const client = window.LumenSupabaseConfig?.client;
        const submitButton = form.querySelector("button");
        submitButton.disabled = true;
        setStatus("Saving your password...");

        try {
            const { error } = await client.auth.updateUser({ password: password.value });
            if (error) {
                throw error;
            }
            form.reset();
            form.hidden = true;
            intro.textContent = "Your administrator password is ready.";
            setStatus("Password saved. You can now sign in.", "success");
            loginLink.hidden = false;
        } catch (error) {
            console.error("Administrator password update failed", error);
            setStatus("We could not save that password. Please try again or request a new link.", "error");
        } finally {
            submitButton.disabled = false;
        }
    });

    resetForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const client = window.LumenSupabaseConfig?.client;
        const submitButton = resetForm.querySelector("button");
        submitButton.disabled = true;
        setStatus("Requesting a secure reset link...");

        try {
            if (!client) {
                throw new Error("Supabase client is unavailable");
            }
            const { error } = await client.auth.resetPasswordForEmail(resetEmail.value, {
                redirectTo: resetRedirectUrl
            });
            if (error) {
                throw error;
            }
            resetForm.reset();
            setStatus("If that email is registered, a password-reset link has been sent.", "success");
        } catch (error) {
            console.error("Administrator password reset request failed", error);
            setStatus("We could not request a reset link. Please try again later.", "error");
        } finally {
            submitButton.disabled = false;
        }
    });

    initialize();
})();
