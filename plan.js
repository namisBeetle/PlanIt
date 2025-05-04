// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  const tripForm = document.getElementById('tripForm');
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  const hotelList = document.getElementById('hotelList');
  const resultsInfo = document.querySelector('.results-info');
  const bookingConfirmation = document.getElementById('bookingConfirmation');
  const closeConfirmation = document.getElementById('closeConfirmation');
  const newSearchBtn = document.getElementById('newSearchBtn');
});

// Set minimum dates for check-in and check-out
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

document.getElementById('checkin').min = formatDate(today);
document.getElementById('checkout').min = formatDate(tomorrow);
