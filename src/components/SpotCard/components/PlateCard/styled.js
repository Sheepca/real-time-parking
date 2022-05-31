import styled from "styled-components";

import { COLORS } from "../../../../constants";

export const PlateCardContainer = styled.div`
    width: 100%;
    height: 52px;
    border-radius: 8px;
    background-color: ${COLORS.LIGHT_GRAY};
    box-shadow: 0px 2px 20px ${COLORS.GRAY};

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Plate = styled.div`
    font-weight: 700;
    font-size: 16px;

    text-transform: uppercase;

    color: ${COLORS.BLACK};
`;

export const StatusIconContainer = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${props => props.violator ? COLORS.LIGHT_RED : COLORS.SECONDARY};

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
`;