import React from 'react';

import SpotCardHeader from './components/SpotCardHeader';

import { SpotCardContainer, PlateGrid } from './styles';

const SpotCard = ({ spot }) => {

    return (
        <SpotCardContainer>
            <SpotCardHeader name={spot.name} address={spot.address} />

            <PlateGrid>
                {/* CODE HERE */}
            </PlateGrid>

        </SpotCardContainer>
    );
};

export default SpotCard;
