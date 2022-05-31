class ParkedService {

    // https://my-json-server.typicode.com/airgarage/live-rental-api/spots
    async getParkingSpots() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/spots');
        return res.json();
    }

    // https://my-json-server.typicode.com/airgarage/live-rental-api/spots
    async getRentals() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/rentals');
        return res.json();
    }

    // https://my-json-server.typicode.com/airgarage/live-rental-api/spots
    async getParked() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/parked');
        return res.json();
    }
}

export default new ParkedService();