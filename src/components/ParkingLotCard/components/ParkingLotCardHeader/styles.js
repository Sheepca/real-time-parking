import styled from 'styled-components';

import { COLORS } from '../../../../constants';

export const ParkingLotCardHeaderContainer = styled.div`
    width: 100%;
    height: 30%;
    background-color: ${COLORS.LIGHT_GRAY};
    box-shadow: 0px 2px 5px #DCDCE6;
    border-radius: 18px 18px 0 0;
    overflow: hidden;
`;

export const Top = styled.div`
    width: 100%;
    height: 70%;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 70%;
    padding: 1rem;
`;

export const Left = styled.div`
    width: 79%;
`;

export const Right = styled.div`
    width: 19%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.div`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: ${COLORS.BLACK};
`;

export const Address = styled.div`
    font-family: 'Montserrat';
    font-weight: 500;
    margin-top: 6px;
    font-size: 12px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${COLORS.LIGHTEST_GRAY};
`;

export const ImageContainer = styled.div`
    height: 100%;
    aspect-ratio: 1;
    border-radius: 4px;
    background-color: ${COLORS.GRAY};
`;


