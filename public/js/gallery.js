document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded

    // Image Modal Logic
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');

    // Function to open the modal
    function openModal(imgSrc) {
        modalImage.src = imgSrc;
        imageModal.style.display = 'flex'; // Use flex to center the image
    }

    // Function to close the modal
    function closeModalHandler() {
        imageModal.style.display = 'none';
    }

    // Event delegation for gallery images
    document.body.addEventListener('click', function(event) {
        if (event.target.closest('.gallery-item')) {
            const galleryItem = event.target.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            if (img) {
                openModal(img.src);
            }
        }
    });

    // Close modal when the close button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', closeModalHandler);
    }

    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target == imageModal) {
            closeModalHandler();
        }
    });
});
