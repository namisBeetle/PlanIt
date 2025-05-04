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

// Update price display when range slider changes
priceRange.addEventListener('input', function() {
  priceDisplay.textContent = this.value;
});

// Sample hotel data
const hotels = [
  { id: 1, name: "Luxury Palace Hotel", price: 21000, rating: 4.8, image: "https://placehold.co/300x150/3498db/ffffff?text=Luxury+Palace" },
  { id: 2, name: "Comfort Inn", price: 18000, rating: 4.2, image: "https://placehold.co/300x150/2ecc71/ffffff?text=Comfort+Inn" },
  { id: 3, name: "Budget Stay", price: 9000, rating: 3.7, image: "https://placehold.co/300x150/e74c3c/ffffff?text=Budget+Stay" },
  // ... (continue adding all hotels)
];
