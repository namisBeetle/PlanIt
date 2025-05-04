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

// Form submission handler
tripForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;
  const maxPrice = priceRange.value;

  if (new Date(checkin) >= new Date(checkout)) {
    alert("Check-out date must be after check-in date");
    return;
  }

  const filteredHotels = hotels.filter(hotel => hotel.price <= maxPrice);

  displayHotels(filteredHotels, destination, checkin, checkout, guests);
});

// Display hotels in the results section
function displayHotels(hotels, destination, checkin, checkout, guests) {
  hotelList.innerHTML = '';

  if (hotels.length === 0) {
    resultsInfo.textContent = `No hotels found within your budget for ${destination}. Try increasing your price range.`;
    return;
  }

  resultsInfo.textContent = `Showing ${hotels.length} hotels in ${destination} for ${guests} guests`;

  const nights = Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

  hotels.forEach(hotel => {
    const totalPrice = hotel.price * nights;

    const hotelCard = document.createElement('div');
    hotelCard.className = 'hotel-card';

    hotelCard.innerHTML = `
      <div class="hotel-image" style="background-image: url('${hotel.image}')"></div>
      <div class="hotel-info">
        <div class="hotel-name">${hotel.name}</div>
        <div class="hotel-price">₹${hotel.price} per night</div>
        <div class="hotel-rating">
          ${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 >= 0.5 ? '½' : ''}
          <span style="color: #777">(${hotel.rating})</span>
        </div>
        <div class="hotel-total">Total for ${nights} nights: <strong>₹${totalPrice}</strong></div>
        <button class="book-btn" data-hotel-id="${hotel.id}" data-hotel-name="${hotel.name}" data-hotel-price="${totalPrice}">Book Now</button>
      </div>
    `;

    hotelList.appendChild(hotelCard);

    setTimeout(() => {
      hotelCard.style.opacity = '1';
    }, 100);
  });

  document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
      const hotelName = this.getAttribute('data-hotel-name');
      const hotelPrice = this.getAttribute('data-hotel-price');
      showBookingConfirmation(destination, checkin, checkout, hotelName, hotelPrice);
    });
  });
}

// Show booking confirmation popup
function showBookingConfirmation(destination, checkin, checkout, hotelName, price) {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  const formattedCheckin = checkinDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const formattedCheckout = checkoutDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  document.getElementById('confirmDestination').textContent = destination;
  document.getElementById('confirmCheckin').textContent = formattedCheckin;
  document.getElementById('confirmCheckout').textContent = formattedCheckout;
  document.getElementById('confirmHotel').textContent = hotelName;
  document.getElementById('confirmPrice').textContent = price;

  bookingConfirmation.style.display = 'flex';
}

// Close confirmation popup
closeConfirmation.addEventListener('click', function() {
  bookingConfirmation.style.display = 'none';
});

// New search button
newSearchBtn.addEventListener('click', function() {
  bookingConfirmation.style.display = 'none';
  tripForm.reset();
  priceDisplay.textContent = priceRange.value;
  hotelList.innerHTML = '';
  resultsInfo.textContent = 'Complete the form and click "Search Hotels" to see available options';
});

// Close popup when clicking outside
bookingConfirmation.addEventListener('click', function(e) {
  if (e.target === bookingConfirmation) {
    bookingConfirmation.style.display = 'none';
  }
});
