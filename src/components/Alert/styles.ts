import styled from 'styled-components';

export const Container = styled.div<{ $show: boolean, $type: string }>`
    position: fixed;
    top: 10px;
    right: 30px;
    z-index: 1;
    display: flex;
    gap: 5px;
    background-color: ${props => props.$type === 'error' ? props.theme.COLORS.danger : props.theme.COLORS.success};
    padding: 15px;
    border-radius: 4px;
    transition: transform .6s, opacity .3s;
    opacity: ${props => props.$show ? 1 : 0};
    transform: ${props => props.$show ? 'translateX(0)' : 'translateX(20%)'};
    pointer-events: ${props => props.$show ? 'all' : 'none'};

    .icon {
        color: ${props => props.theme.COLORS.white};
        font-size: ${props => props.theme.FONT_SIZES.lg};
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Title = styled.span`
    color: ${props => props.theme.COLORS.white};
    font-size: ${props => props.theme.FONT_SIZES.sm};
    font-weight: 700;
`