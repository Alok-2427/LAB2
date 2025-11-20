document.addEventListener("DOMContentLoaded", function() {  
    // Animate header  
    const header = document.querySelector('header');  
    header.style.opacity = 1;  

    // Form submission event  
    document.getElementById('contact-form').addEventListener('submit', function(event) {  
        event.preventDefault(); // Prevent default form submission  

        // Here you can add AJAX or Fetch API code to send the form data to your email or server  

        alert('Thank you for your message! I will get back to you soon.');  
        this.reset(); // Reset the form after submission  
    });  
});  