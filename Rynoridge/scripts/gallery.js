document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item img");
  const overlay = document.getElementById("image-overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeOverlay = document.getElementById("close-overlay");

  // Open the overlay with the clicked image
  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      overlayImage.src = item.src; // Set the overlay image source
      overlay.classList.remove("hidden"); // Show the overlay
    });
  });

  // Close the overlay
  closeOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden"); // Hide the overlay
    overlayImage.src = ""; // Clear the overlay image source
  });

  // Close the overlay when clicking outside the image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
      overlayImage.src = "";
    }
  });
});