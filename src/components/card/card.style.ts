import styled from "styled-components";
import { Border, Spacing } from "../../styles/constants";

export const CardContainer = styled.div`
    border-radius: ${Border.Radius};
    background-color: ${props => props.theme.colors.white};
    margin: ${Spacing.Medium} 0;
    display: flex;
    min-height: 350px;
    flex-direction: column;
`

export const CardHeader = styled.div`
    margin: ${Spacing.Medium} 0;
    display: flex;
`

export const CardImage = styled.img`
    width: 60%;
    margin: auto;

`

export const CardDescription = styled.div`
    display:flex
    flex-direction: column;
`

export const CardImageContainer = styled.div`
    display:flex;
    width: 20%;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width: 480px) {
        display:none;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`

export const CardInfo = styled.div`
    width: 100%;
    @media only screen and (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const CardDate = styled.span`
    margin-right:${Spacing.Medium};
    color: ${props => props.theme.colors.dark};
`
