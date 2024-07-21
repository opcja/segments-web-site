import styled from "styled-components"

const Button = styled.button`
    width: fit-content;
    padding: 12px 24px;
    margin: 0 auto;
    font-size: ${({theme}) => theme.font.body.regular};
    line-height: ${({theme}) => theme.lineheight.body};
    font-weight: 600;
    color: ${({theme}) => theme.colors.text.primary};
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.border.primary};
`

export default Button