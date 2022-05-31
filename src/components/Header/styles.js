import styled from "styled-components";

import { COLORS } from "../../constants";

export const HeaderContainer = styled.div`
    height: 64px;
    background-color: ${COLORS.SECONDARY};
    border-radius: 0 0 8px 8px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 48px;
    width: 48px;

    & img {
        height: 100%;
        width: 100%;
    }
`;