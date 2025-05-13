import React from 'react';
import { useState, useEffect } from 'react';
import ParkedService  from '../../services/ParkedService'

import ParkingLotCardHeader from './components/ParkingLotCardHeader';

import { ParkingLotCardContainer, PlateGrid } from './styles';
import PlateCard from './components/PlateCard';

const ParkingLotCard = ({ parkingLot }) => {
  const [parked, setParked] = useState([]); 
  const fetchParked = async () => {
    const response = await ParkedService.getParked()
    setParked(response);
    console.log(response)
  };
  useEffect(() => {
    fetchParked();
  }, [])

  const [rentals, setRentals] = useState([]); 
  const fetchRentals = async () => {
    const response = await ParkedService.getRentals()
    setRentals(response);
  };
  useEffect(() => {
    fetchRentals();
  }, [])

    return (
        <ParkingLotCardContainer>
            <ParkingLotCardHeader name={parkingLot.name} address={parkingLot.address} />

            <PlateGrid>
                {
                  parked.filter(item => item.parking_lot === parkingLot.id)
                        .map(item => (
                          <PlateCard key={item.id} plate={item.plate} violator={!rentals.some(rental => rental.plate === item.plate)}/>
                        ))
                }
            </PlateGrid>

        </ParkingLotCardContainer>
    );
};

export default ParkingLotCard;
