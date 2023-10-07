import { styled } from 'styled-components';


export const UL = styled.ul`
display:none;

`

export const Div = styled.div`
${props => props.toggle ? `transform :translateX(10px)` :"" }
`

