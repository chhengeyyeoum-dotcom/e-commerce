"use strict";

(() => {
    const form = document.getElementById("setupForm");
    const intro = document.getElementById("setupIntro");
    const status = document.getElementById("setupStatus");
    const loginLink = document.getElementById("setupLoginLink");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("passwordConfirmation");

    const setStatus = (message, type = "") => {
        status.textContent = message;
        status.className = `admin-status${type ? ` ${type}` : ""}`;
    };

    const showFailure = (message) => {
        form.hidden = true;
        intro.textContent = "This invitation can no longer be used.";
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
        const hasInviteToken = hashParams.get("type") === "invite" && Boolean(hashParams.get("access_token"));
        const hasInvitation = Boolean(code) || hasInviteToken;
        removeSensitiveUrlParts();

        if (!hasInvitation) {
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
                showFailure("The invitation is missing, expired, or invalid.");
                return;
            }

            intro.textContent = "Choose a password for your administrator account.";
            form.hidden = false;
        } catch (error) {
            console.error("Administrator invitation setup failed", error);
            showFailure("The invitation is missing, expired, or invalid.");
        }
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
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
            setStatus("We could not save that password. Please try again or request a new invitation.", "error");
        } finally {
            submitButton.disabled = false;
        }
    });

    initialize();
})();
