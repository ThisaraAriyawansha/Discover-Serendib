document.addEventListener('DOMContentLoaded', function() {
    const model = new DestinationModel();
    const destinationContainer = document.querySelector('.destination-cards');
    
    // Fetch destinations and render them
    model.fetchDestinations().then(destinations => {
        destinations.forEach(dest => {
            destinationContainer.innerHTML += `
                <div class="card">
                    <img src="../assets/images/${dest.image}" alt="${dest.name}">
                    <h3>${dest.name}</h3>
                    <p>${dest.shortDescription}</p>
                    <a href="destination.html?id=${dest.id}" class="cta-button">Learn More</a>
                </div>
            `;
        });
    });
});
