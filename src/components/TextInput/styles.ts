import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const Label = styled.label`
  font-size: ${props => props.theme.FONT_SIZES.sm};
  color: ${props => props.theme.COLORS.textColor400}; ;
  margin-left: 3px;
`

export const Input = styled.input<{ $borderRadius?: 'sm' | 'md' }>`
  width: 100%;
  background-color: ${props => props.theme.COLORS.inputBackground};
  color: ${props => props.theme.COLORS.inputColor};
  border: 1px solid ${props => props.theme.COLORS.inputBorderColor};
  outline: none;
  padding: 11px 20px;
  box-sizing: border-box;
  transition: all .3s;
  border-radius:  ${props => props.$borderRadius == 'sm' ? '4px' : '40px'};

  &::placeholder{
    color: ${props => props.theme.COLORS.inputPlaceholderColor};
  }

  &:hover{
    background-color:${props => props.theme.COLORS.inputBackgroundHover} ;
  }

  &:focus{
    border-color: ${props => props.theme.COLORS.inputBorderColorFocus};
  }
`