import React from 'react';

import validCar from '../../../../assets/car.svg';
import violatorCar from '../../../../assets/vcar.svg';
import { Plate, PlateCardContainer, StatusIconContainer } from './styled';

const PlateCard = (props) => {
    return (
        <PlateCardContainer>
            <StatusIconContainer violator={props.violator}>
                <img src={props.violator ? violatorCar : validCar} alt="Car Icon" />
            </StatusIconContainer>

            <Plate>{props.plate}</Plate>
        </PlateCardContainer>
    );
};

export default PlateCard;
