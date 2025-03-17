



//for the light mode and dark mode
const toggleButton = document.getElementById("toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});


document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
  }
});


body.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
  localStorage.setItem("theme", currentTheme);
});



//for the map


function initMap() {
    // Create a map centered at a specific location
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
      zoom: 14, // Adjust the zoom level
    });
  
    // Add a marker to the map
    const marker = new google.maps.Marker({
      position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
      map: map,
      title: "Marker Title", // Optional: Add a title to the marker
    });
  }

  initMap();


