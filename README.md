# Real Time Parking Dashboard

## Background

At [AirGarage](https://airgarage.com), we replace legacy, old-school parking systems with software and cameras. Our parking facilities are gateless - meaning anyone can drive in and drive out. This saves owners money, but has a downside - anyone could drive in without paying. Luckily, cameras can help us spot who isn’t paying.
## Instructions

Your goal in this challenge will be to use our APIs to show who is currently paying for parking and who isn’t, across several locations.

One of our engineers has already built some components and styles for you.

In the first part, you will be using our **/spots** endpoint to build a **SpotGrid** that contains **SpotCards** 

where you will be displaying spot information (name and address).

After that, inside each **SpotCard** you will have a sub grid called **PlateGrid** where you will be listing all the parked cars returned by **/parked** endpoint. 

Finally, with the **/rentals** endpoint, you will have all the cars that are paying for rental. You will need to display the plates in two different state, valid car (represented as an orange car icon) and violator car (represented as a red car icon).

Here it’s a mock-up of how the product should look:
![Selección_333](https://user-images.githubusercontent.com/31289074/171175759-9443f19a-53b4-4f5e-838d-f137b99b1bfb.png)

### Setup environment:

1. Clone the repo
2. Change directory to the web app folder and install all dependencies with **yarn install**
3. Start development server with **yarn start**

### API documentation:

**Parking lot endpoint:** ([https://my-json-server.typicode.com/airgarage/live-rental-api/spots](https://my-json-server.typicode.com/airgarage/live-rental-api/spots))

Returns all the parking lots, with the following structure.

```jsx
{
    id: 1,
    name: 'Parking Name',
    address: 'Parking Address',
    coordinates: {
        lat: -34.397,
        lng: 150.644
    },
    hourly_price: '$1.00',
    rating: 4.5,
    total_spots: 100,
    available_spots: 50,
    image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}
```

**Rentals** **endpoint: (**[https://my-json-server.typicode.com/airgarage/live-rental-api/rentals](https://my-json-server.typicode.com/airgarage/live-rental-api/rentals))

Return all the current active rentals for all parking spots, with the following structure. 

```jsx
{
	id: 1,
	spot: 1,
	plate: 'ABC123'
}
```

**spot** field correspond to the spot id where there is a paid rental license plate.

**Parked cars endpoint:** ([https://my-json-server.typicode.com/airgarage/live-rental-api/parked](https://my-json-server.typicode.com/airgarage/live-rental-api/parked))

The data returned for this endpoint, it’s collected with our camera systems. This endpoint returns a list of all cars parked in some of our spots, with the following structure.

```jsx
{
	id: 1,
	spot: 1,
	plate: 'ABC123'
}
```

**spot** field correspond to the spot id where there is a parked car.
