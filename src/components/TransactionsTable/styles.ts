import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid ${props => props.theme.COLORS.tableHeaderBorderColor};
    border-spacing: 0;
    border-radius: 8px;
`

export const TableHead = styled.thead`
    background-color: ${props => props.theme.COLORS.tableHeaderBackground};
    color: ${props => props.theme.COLORS.textColor500};
`

export const TableBody = styled.tbody``

export const TableHeadCell = styled.th`
    padding: 14px 20px;
    text-align: left;
    border-right: 1px solid ${props => props.theme.COLORS.tableHeaderBorderColor};
    border-bottom: 1px solid ${props => props.theme.COLORS.tableHeaderBorderColor};

    &:first-child {
        border-top-left-radius: 8px;
    }

    &:last-child {
        border-top-right-radius: 8px;
    }
`

export const TableRow = styled.tr`
    &:hover {
        background-color: ${props => props.theme.COLORS.tableRowHover};
    }
`

export const TableCell = styled.td`
    padding: 10px 20px;
    color: ${props => props.theme.COLORS.textColor500};

    &:not(:last-child) {
        border-right: 1px solid ${props => props.theme.COLORS.tableHeaderBorderColor};
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 10px;
`

export const ActionBtn = styled.button<{ $variant: string }>`
    padding: 1px 5px;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: ${props => props.$variant == 'warning' ? props.theme.COLORS.warning : props.theme.COLORS.danger};
    color: ${props => props.theme.COLORS.white};
    transition: all .3s;
    outline: none;
    cursor: pointer;

    &:hover {
        border-color: ${props => props.$variant == 'warning' ? props.theme.COLORS.warning : props.theme.COLORS.danger};
        background-color: transparent;
        color:  ${props => props.$variant == 'warning' ? props.theme.COLORS.warning : props.theme.COLORS.danger};
    }
`

export const EditIcon = styled(MdOutlineEdit)`
    font-size: ${props => props.theme.FONT_SIZES.lg};
`

export const DeleteIcon = styled(MdOutlineDeleteForever)`
    font-size: ${props => props.theme.FONT_SIZES.lg};
`