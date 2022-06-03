import styled from 'styled-components';

export const ParkingLotGrid = styled.div`
    margin: 3rem 5%;
    width: 90%;
    min-height: calc(100vh - 96px); /* 96px = header height (64px) + margin (32px) */

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 1.5rem;
`;