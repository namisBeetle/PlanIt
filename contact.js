// Initial Setup and DOM References
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const inputGroups = document.querySelectorAll('.input-group');
    const inputs = document.querySelectorAll('input, textarea');
    
    // Add animation classes to input groups with delay
    inputGroups.forEach((group, index) => {
      setTimeout(() => {
        group.style.opacity = '1';
      }, 200 + (index * 100));
    });
  });
// Form Validation and Submission Logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form
      if (!name || !email || !message) {
        formMsg.textContent = 'Please fill out all fields.';
        formMsg.style.color = '#e74c3c';
        
        // Shake animation for error
        form.classList.add('shake');
        setTimeout(() => {
          form.classList.remove('shake');
        }, 500);
        
        return;
      }
      
      // Show loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        
        // Reset form
        form.reset();
      }, 1500);
    });
  });