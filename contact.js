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
  // Success Message Animation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    // This function would be called after successful form validation and submission
    function showSuccessMessage() {
      // Show success message with animation
      form.style.opacity = '0';
      form.style.transform = 'translateY(-20px)';
      
      setTimeout(() => {
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          successMessage.classList.add('show');
        }, 50);
      }, 300);
      
      // Reset form after 5 seconds for demo purposes
      setTimeout(() => {
        successMessage.classList.remove('show');
        
        setTimeout(() => {
          successMessage.classList.add('hidden');
          form.style.display = 'block';
          
          setTimeout(() => {
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
            submitBtn.disabled = false;
          }, 50);
        }, 300);
      }, 5000);
    }
    
    // This would be integrated with the form submission handler
    // For demonstration, we'll add a dummy trigger
    if (false) { // This is just a placeholder, not actually executed
      showSuccessMessage();
    }
  });
  // Input Field Animations
document.addEventListener('DOMContentLoaded', function() {
    // Add floating label effect
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      // Add focus animation
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
      });
      
      // Add input animation
      input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
          this.classList.add('has-value');
        } else {
          this.classList.remove('has-value');
        }
      });
    });
  });
  // Error Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add shake animation for error
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        
        .shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      </style>
    `);
  });