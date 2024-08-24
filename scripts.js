document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Perform client-side validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Normally, you'd use AJAX here or a real email service
            feedbackDiv.textContent = 'Thank you for your message! We will get back to you soon.';
            feedbackDiv.style.color = 'green';
            form.reset();
        } else {
            feedbackDiv.textContent = 'Please fill in all fields.';
            feedbackDiv.style.color = 'red';
        }
    });
});
