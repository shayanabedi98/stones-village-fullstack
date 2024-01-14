const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMsg = document.querySelector('#input-msg');
const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
    // Prevent form submission if the name includes "robertshemi"
    if (inputName.value.toLowerCase().includes('robertshemi')) {
        e.preventDefault();
        alert('Sent');
        return;
    }

    // Validate the form fields
    if (!inputEmail.value || !inputMsg.value || !inputName.value || !validateEmail(inputEmail.value)) {
        e.preventDefault();
        alert("Please fill out all fields correctly.");
    } else {
        alert("Thank you for your message. We will get back to you within 2 to 3 business days.");
    }
});

const validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}