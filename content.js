// Select all headings with text larger than a certain size (in pixels)
const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).filter(heading => {
  const computedStyle = window.getComputedStyle(heading);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  return fontSize > 16; // Adjust this value as needed
});

// Function to add coquette bows
function addCoquetteBows(element) {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("bow.png"); 
  const fontSize = parseFloat(window.getComputedStyle(element).getPropertyValue("font-size"));
  const bowSize = Math.min(fontSize * 0.8, 50); // Adjust the scaling factor and maximum size as needed
  const bowMargin = fontSize * 0.1; // Adjust the margin as needed
  img.style.width = bowSize + "px"; // Set the size dynamically
  img.style.height = "auto";
  img.style.marginRight = bowMargin + "px"; // Adjust the spacing dynamically
  element.insertBefore(img, element.firstChild);
}


// Add coquette bows to each heading
headings.forEach(addCoquetteBows);
