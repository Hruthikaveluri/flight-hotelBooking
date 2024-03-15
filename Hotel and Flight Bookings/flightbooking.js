// script.js
document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    // Here you would make an AJAX request to fetch flight information based on the user input
    // For demonstration, let's just display the user input as the search results
  
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
      <h2>Search Results</h2>
      <p>Departure: ${departure}</p>
      <p>Destination: ${destination}</p>
      <p>Date: ${date}</p>
    `;
    
    resultsContainer.classList.remove('hidden');
  });
  