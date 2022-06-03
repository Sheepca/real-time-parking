import React from 'react';

import { ImageContainer, Left, Right, ParkingLotCardHeaderContainer, Address, Name, Top } from './styles';

const ParkingLotCardHeader = ({ name, address }) => {
    return (
        <ParkingLotCardHeaderContainer>
            <Top>
                <Left>
                    <Name>{name}</Name>
                    <Address>{address}</Address>
                </Left>
                <Right>
                    <ImageContainer>

                    </ImageContainer>
                </Right>
            </Top>
        </ParkingLotCardHeaderContainer>
    );
};

export default ParkingLotCardHeader;
