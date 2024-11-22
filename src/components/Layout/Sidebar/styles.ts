import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Container = styled.div<{ $expanded: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.COLORS.sidebarBackground};
    width: ${props => props.$expanded ? '300px' : '79px'};
    transition: all .6s;
    border-right: 1px solid ${props => props.theme.COLORS.sidebarBorderColor};
`

export const Link = styled(LinkRouter)`
    text-decoration: none;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 26px 0;
    height: 44px;
    overflow: hidden;
`

export const HeaderLogo = styled.img``

export const HeaderIcon = styled(GiHamburgerMenu)`
    font-size: ${props => props.theme.FONT_SIZES.md};
    color: ${props => props.theme.COLORS.sidebarColor};
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    flex: 1;
`

export const NavigationItem = styled.div<{ $isActive: boolean }>`
    display: flex;
    padding: 14px 20px;
    gap: 14px;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme.COLORS.sidebarColor};
    background-color: ${props => props.$isActive && props.theme.COLORS.sidebarBackgroundHover};

    &:hover {
        background-color: ${props => props.theme.COLORS.sidebarBackgroundHover};
    }
`

export const NavigationItemIcon = styled.div`
    display: flex;
    font-size: ${props => props.theme.FONT_SIZES.xl};
`

export const NavigationItemLabel = styled.span`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.FONT_SIZES.md};
    font-weight: 700;
    white-space: nowrap;
`

export const Footer = styled.div`
    border-top: 1px solid ${props => props.theme.COLORS.sidebarBorderColor};
    margin: 10px;
`

export const User = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 10px;
    border-bottom-left-radius: 5px; 
    border-bottom-right-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.$isActive && props.theme.COLORS.sidebarBackgroundHover};

    &:hover {
        background-color: ${props => props.theme.COLORS.sidebarBackgroundHover};
    }
`

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    min-height: 38px;
    border-radius: 50%;
    text-transform: uppercase;
    background-color: ${props => props.theme.COLORS.primary};
    color: ${props => props.theme.COLORS.sidebarColor};
    font-weight: 700;
`

export const UserName = styled.div`
    flex: 1;
    color: ${props => props.theme.COLORS.sidebarColor};
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`