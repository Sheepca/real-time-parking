class ParkedService {

    // https://my-json-server.typicode.com/airgarage/live-rental-api/parking-lot
    async getParkingLots() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/parking-lot');
        return res.json();
    }

    // https://my-json-server.typicode.com/airgarage/live-rental-api/rentals
    async getRentals() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/rentals');
        return res.json();
    }

    // https://my-json-server.typicode.com/airgarage/live-rental-api/parked
    async getParked() {
        const res = await fetch('https://my-json-server.typicode.com/airgarage/live-rental-api/parked');
        return res.json();
    }
}

export default new ParkedService();