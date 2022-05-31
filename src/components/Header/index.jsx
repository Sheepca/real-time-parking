import React from 'react';

import LOGO from '../../assets/logo.png';
import { HeaderContainer, ImageContainer } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <img src={LOGO} alt="AirGarage Logo" />
            </ImageContainer>
        </HeaderContainer>
    );
};

export default Header;
