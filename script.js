function shareOnWhatsApp() {
    // Get selected services
    const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(checkbox => checkbox.parentElement.querySelector('h3').textContent)
        .join(', ');

    // Create the message
    const message = `Check out these amazing surf services: ${selectedServices}\nCome join us for an unforgettable experience!`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp share link
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Add animation to checkboxes
document.querySelectorAll('.service-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 200);
        } else {
            this.style.transform = 'scale(1)';
            setTimeout(() => {
                this.style.transform = 'none';
            }, 200);
        }
    });
});