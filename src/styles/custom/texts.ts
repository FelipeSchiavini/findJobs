import styled from "styled-components";
import { FontFamily, FontSize, FontWeight, Spacing } from "../constants";

export const P = styled.p`
    margin-bottom: ${Spacing.Medium};
    margin-right: ${Spacing.Large};
    margin-left: ${Spacing.Large};
    font-size: ${FontSize.XSmall};
    text-align: justify;
    font-family: ${FontFamily.Secondary}
`

export const PStrong = styled.p`
    margin-bottom: ${Spacing.Medium};
    margin-right: ${Spacing.Large};
    margin-left: ${Spacing.Large};
    font-size: ${FontSize.XSmall};
    font-weight: ${FontWeight.SemiBold};
    text-align: justify;
    font-family: ${FontFamily.Secondary};
    cursor: pointer;
    &:hover{
        color: ${props=>props.theme.colors.contrast}
    }
`