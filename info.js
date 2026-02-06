document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('p');
            const isVisible = answer.style.display === 'block';
            
            // Close other open FAQs (Optional: remove this if you want multiple open)
            faqItems.forEach(otherItem => {
                otherItem.querySelector('p').style.display = 'none';
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isVisible) {
                answer.style.display = 'block';
                item.classList.add('active');
            }
        });
    });

    // Form submission placeholder
    const contactForm = document.getElementById('infoContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        });
    }
});