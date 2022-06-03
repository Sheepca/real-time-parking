import styled from "styled-components";

import { COLORS } from "../../constants";

export const ParkingLotCardContainer = styled.div`
    width: 100%;
    height: 450px;
    background-color: ${COLORS.LIGHT_GRAY};
    border-radius: 18px;
`;

export const PlateGrid = styled.div`
    height: 70%;
    padding: 2rem 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-template-rows: repeat(auto-fit, 52px);
    grid-gap: 1.5rem 1rem;
`;