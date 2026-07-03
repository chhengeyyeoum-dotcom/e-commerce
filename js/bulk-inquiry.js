const formData = {
    fullName: form.fullName.value,
    companyName: form.companyName.value,
    email: form.email.value,
    phone: form.phone.value,
    requestType: form.requestType.value,
    quantity: form.quantity.value,
    eventDate: form.eventDate.value,
    budget: form.budget.value,
    products: form.products.value,
    notes: form.notes.value
};

fetch("https://script.google.com/macros/s/AKfycbwlLfW8_h1pY2wb0ntA0FMOAWrseKEsCqhKG0mgjgqoC-ah89f8rszvmHyHQ0QHFTKs/exec", {
    method: "POST",
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(() => {
    renderConfirmation();
})
.catch(error => {
    console.error(error);

    submitBtn.disabled = false;
    submitBtn.textContent = "Send inquiry";

    if (mobileSubmitBtn) {
        mobileSubmitBtn.disabled = false;
        mobileSubmitBtn.textContent = "Send inquiry";
    }

    alert("Unable to send inquiry. Please try again.");
});