// script.js
document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
  
  
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
      <h2>Search Results</h2>
      <p>Departure: ${departure}</p>
      <p>Destination: ${destination}</p>
      <p>Date: ${date}</p>
    `;
    
    resultsContainer.classList.remove('hidden');
  });
  
