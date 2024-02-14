// Select all headings
const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// Function to add coquette bows
function addCoquetteBows(element) {
  const img = document.createElement("img");
  img.src = "https://cdn.inspireuplift.com/uploads/images/seller_products/30610/1703041999_CoquetteRibbonBowPink.png"; // Specify the URL to your coquette bow image
  img.style.width = "30px"; // Adjust the size as needed
  img.style.height = "auto";
  img.style.marginRight = "5px"; // Adjust the spacing as needed
  element.insertBefore(img, element.firstChild);
}

// Add coquette bows to each heading
headings.forEach(addCoquetteBows);
