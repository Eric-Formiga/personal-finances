import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
`

export const Content = styled.div`
    flex: 1;
`

export const NavbarContent = styled.div`
    height: 70px;
    background-color: ${props => props.theme.COLORS.navbarBackground};
    border-bottom: 1px solid ${props => props.theme.COLORS.borderColor};
`

export const BodyContent = styled.div`
    height: calc(100vh - 70px);
    background-color: ${props => props.theme.COLORS.background};
    overflow: auto;
`