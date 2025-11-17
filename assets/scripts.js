// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Merci pour votre message, ' + name + '! Je vous répondrai bientôt.');
                contactForm.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
    
    // Mettre en surbrillance la page active dans la navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#3498db';
            link.style.fontWeight = 'bold';
        }
    });
});