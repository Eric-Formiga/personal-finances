import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 60px 40px 50px;
    border-bottom: 1px solid ${props => props.theme.COLORS.borderColor};
`

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderTitle = styled.span`
    font-size: ${props => props.theme.FONT_SIZES.xl};
    color: ${props => props.theme.COLORS.textColor500};
    font-weight: 800;
`

export const HeaderSubtitle = styled.span`
    font-size: ${props => props.theme.FONT_SIZES.sm};
    color: ${props => props.theme.COLORS.textColor500};
`

export const HeaderFilter = styled.div`
    display: flex;
    gap: 14px;
    width: 320px;
`

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const Body = styled.div`
    flex: 1;
    padding: 40px 50px;
`

export const BodyRow = styled.div`
    display: flex;
    gap: 30px;
`

export const InformationCard = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    width: 100%;
    border: 1px solid ${props => props.theme.COLORS.borderColor};
    padding: 35px 30px;
    border-radius: 10px;
`

export const InformationCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const InformationCardContentValue = styled.span`
    color: ${props => props.theme.COLORS.textColor500};
    font-weight: 700;
    font-size: ${props => props.theme.FONT_SIZES.lg};
`

export const InformationCardContentLabel = styled.span`
    color: ${props => props.theme.COLORS.textColor400};
    font-weight: 600;
`

export const NewTransactionCard = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    gap: 25px;
    border: 1px solid ${props => props.theme.COLORS.borderColor};
    padding: 30px;
    background-color: ${props => props.theme.COLORS.primaryBackgroundExtraLight};
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        border-color: ${props => props.theme.COLORS.primary};
    }
`

export const NewTransactionCardLabel = styled.span`
    color: ${props => props.theme.COLORS.primary};
    font-size: ${props => props.theme.FONT_SIZES.lg};
    font-weight: 800;
`