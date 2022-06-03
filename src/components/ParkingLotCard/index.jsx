import React from 'react';

import ParkingLotCardHeader from './components/ParkingLotCardHeader';

import { ParkingLotCardContainer, PlateGrid } from './styles';

const ParkingLotCard = ({ parkingLot }) => {

    return (
        <ParkingLotCardContainer>
            <ParkingLotCardHeader name={parkingLot.name} address={parkingLot.address} />

            <PlateGrid>
                {/* CODE HERE */}
            </PlateGrid>

        </ParkingLotCardContainer>
    );
};

export default ParkingLotCard;
