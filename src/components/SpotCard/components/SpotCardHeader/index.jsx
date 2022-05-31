import React from 'react';

import { ImageContainer, Left, Right, SpotCardHeaderContainer, Address, Name, Top } from './styles';

const SpotCardHeader = ({ name, address }) => {
    return (
        <SpotCardHeaderContainer>
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
        </SpotCardHeaderContainer>
    );
};

export default SpotCardHeader;
