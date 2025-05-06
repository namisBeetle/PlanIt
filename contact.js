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