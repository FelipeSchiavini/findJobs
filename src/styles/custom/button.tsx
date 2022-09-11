import styled from "styled-components";
import { Border, FontFamily, FontWeight, Spacing } from "../constants";


interface ButtonProps {
    children: string;
    onClick: ()=> void;
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <ButtonStyled onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: ${props => props.theme.colors.white};
    border-radius: ${Border.Radius};
    border: ${Border.Width} solid grey;
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight.SemiBold};
    min-height: 35px;
    width: 100%;
    margin-top: ${Spacing.Medium};
    &:hover {
        background-color: ${props => props.theme.colors.secundary}
    }
`