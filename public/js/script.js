console.log("Welcome to Jagannath Boys Hostel website!");

document.addEventListener('DOMContentLoaded', function() {
    // Booking Modal Logic
    const bookingModal = document.getElementById('bookingModal');
    const bookingDetails = document.getElementById('bookingDetails');
    const closeModalButton = bookingModal.querySelector('.close-button');

    // Function to open the booking modal
    function openBookingModal(roomType, price, beds) {
        bookingDetails.innerHTML = `
            <p><strong>Room Type:</strong> ${roomType}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Beds:</strong> ${beds}</p>
        `;
        bookingModal.style.display = 'block';
    }

    // Function to close the booking modal
    function closeBookingModal() {
        bookingModal.style.display = 'none';
    }

    // Event delegation for "Book Now" buttons
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('book-room-btn')) {
            const button = event.target;
            const roomType = button.getAttribute('data-room-type');
            const price = button.getAttribute('data-price');
            const beds = button.getAttribute('data-beds');
            openBookingModal(roomType, price, beds);
        }
        // This is for the main book-now button in the header
        if (event.target.classList.contains('book-now')) {
             event.preventDefault();
             // Since this is a general booking button, we can open the modal with a default message
             // or open the rooms page. For now, let's open the modal with a general message.
             bookingDetails.innerHTML = `<p>Please select a room from our rooms page to see details.</p>`;
             bookingModal.style.display = 'block';
        }
    });

    // Close modal when the close button is clicked
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeBookingModal);
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == bookingModal) {
            closeBookingModal();
        }
    });

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

