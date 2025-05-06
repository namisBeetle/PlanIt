// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const tripForm = document.getElementById('tripForm');
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  const hotelList = document.getElementById('hotelList');
  const resultsInfo = document.querySelector('.results-info');
  const bookingConfirmation = document.getElementById('bookingConfirmation');
  const closeConfirmation = document.getElementById('closeConfirmation');
  const newSearchBtn = document.getElementById('newSearchBtn');
  
  // Set minimum date for check-in to today
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
  
  // Sample hotel data (in a real app, this would come from an API)
  const hotels = [
    {
      id: 1,
      name: "Luxury Palace Hotel",
      price: 21000,
      rating: 4.8,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/602436060.jpg?k=671ebe61142b366804ce53885e720111318458fb072e4fddd84f6907010d6e77&o=&hp=1"
    },
    {
      id: 2,
      name: "Comfort Inn",
      price: 18000,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1743315713979-b46562f5f14e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Budget Stay",
      price: 9000,
      rating: 3.7,
      image: "https://r1imghtlak.ibcdn.com/0d0898b5-022a-482f-a55b-e15f3a84e663.JPG?&downsize=330:180&crop=330:180;10,0&output-format=webp"
    },
    {
      id: 4,
      name: "Seaside Resort",
      price: 17000,
      rating: 4.5,
      image: "https://images7.alphacoders.com/345/345182.jpg"
    },
    {
      id: 5,
      name: "Downtown Suites",
      price: 22000,
      rating: 4.3,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/608923581.jpg?k=ef65f3283573e379fe207dbc1dae2391e406aebde865a3f337c97f7008e67de6&o=&hp=1"
    },
    {
      id: 6,
      name: "Traveler's Rest",
      price: 1200,
      rating: 3.9,
      image: "https://images.squarespace-cdn.com/content/v1/612688c13b44c92890ffd835/1659040084519-LHGQ71S9E18I1W7M5OSJ/TRAVELERS_REST-4489.jpg?format=2500w"
    },
    {
      id: 7,
      name: "Mountain View Lodge",
      price: 15000,
      rating: 4.6,
      image: "https://media.scurto.net/cdn-cgi/image/width=1280/2057/media/13321.jpg"
    },
    {
      id: 8,
      name: "Ocean Paradise Resort",
      price: 25000,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=150&fit=crop"
    },
    {
      id: 9,
      name: "Urban Boutique Hotel",
      price: 16500,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=150&fit=crop"
    },
    {
      id: 10,
      name: "Heritage Grand Hotel",
      price: 23000,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&h=150&fit=crop"
    },
    {
      id: 11,
      name: "Wilderness Retreat",
      price: 13500,
      rating: 4.2,
      image: "https://cdn.prod.website-files.com/65e2e78d061034866949e5e6/66a9e2b8c5e1d780431ba412_x21qbyt5i3wb4u3ht7i3gywyjqt6_1_r1AgW26-0cZPymR8M3yQtA.jpeg"
    },
    {
      id: 12,
      name: "Skyline Executive Suites",
      price: 19500,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=300&h=150&fit=crop"
    },
    {
      id: 13,
      name: "Palm Beach Resort",
      price: 28000,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=150&fit=crop"
    },
    {
      id: 14,
      name: "Eco Forest Lodge",
      price: 11000,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=300&h=150&fit=crop"
    },
    {
      id: 15,
      name: "City Lights Inn",
      price: 14500,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?w=300&h=150&fit=crop"
    }
  ];
  
  // Form submission handler
  tripForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    const maxPrice = priceRange.value;
    
    // Validate dates
    if (new Date(checkin) >= new Date(checkout)) {
      alert("Check-out date must be after check-in date");
      return;
    }
    
    // Filter hotels based on price
    const filteredHotels = hotels.filter(hotel => hotel.price <= maxPrice);
    
    // Display results
    displayHotels(filteredHotels, destination, checkin, checkout, guests);
  });
  
  // Display hotels in the results section
  function displayHotels(hotels, destination, checkin, checkout, guests) {
    // Clear previous results
    hotelList.innerHTML = '';
    
    if (hotels.length === 0) {
      resultsInfo.textContent = `No hotels found within your budget for ${destination}. Try increasing your price range.`;
      return;
    }
    
    // Update results info
    resultsInfo.textContent = `Showing ${hotels.length} hotels in ${destination} for ${guests} guests`;
    
    // Calculate number of nights
    const nights = Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));
    
    // Create hotel cards
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
      
      // Add animation to each card
      setTimeout(() => {
        hotelCard.style.opacity = '1';
      }, 100);
    });
    
    // Add event listeners to book buttons
    document.querySelectorAll('.book-btn').forEach(button => {
      button.addEventListener('click', function() {
        const hotelId = this.getAttribute('data-hotel-id');
        const hotelName = this.getAttribute('data-hotel-name');
        const hotelPrice = this.getAttribute('data-hotel-price');
        
        // Show booking confirmation
        showBookingConfirmation(destination, checkin, checkout, hotelName, hotelPrice);
      });
    });
  }
  
  // Show booking confirmation popup
  function showBookingConfirmation(destination, checkin, checkout, hotelName, price) {
    // Format dates for display
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const formattedCheckin = checkinDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const formattedCheckout = checkoutDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    
    // Update confirmation details
    document.getElementById('confirmDestination').textContent = destination;
    document.getElementById('confirmCheckin').textContent = formattedCheckin;
    document.getElementById('confirmCheckout').textContent = formattedCheckout;
    document.getElementById('confirmHotel').textContent = hotelName;
    document.getElementById('confirmPrice').textContent = price;
    
    // Show confirmation popup
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
});