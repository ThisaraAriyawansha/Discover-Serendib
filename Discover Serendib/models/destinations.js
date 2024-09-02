class DestinationModel {
    constructor() {
        this.destinations = [];
    }

    fetchDestinations() {
        return fetch('../data/destinations.json')
            .then(response => response.json())
            .then(data => {
                this.destinations = data.destinations;
                return this.destinations;
            });
    }

    getDestinationById(id) {
        return this.destinations.find(dest => dest.id == id);
    }
}
