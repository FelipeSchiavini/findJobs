import styled from "styled-components";
import { Border, FontFamily, FontSize, FontWeight, Spacing } from "../constants";

export const H2 = styled.h2`
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Medium};
    padding: ${Spacing.Small} 0 ${Spacing.Small} 0;
    font-weight: ${FontWeight.Bold}
    `

export const H3 = styled.h3`
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.XSmall};
    border-radius: ${Border.Radius};
    font-weight: ${FontWeight.SemiBold};
    padding: ${Spacing.Small} ${Spacing.Large};
    margin-bottom: ${Spacing.Medium}; 
    display:inline-block;
    color: ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.dark}
`