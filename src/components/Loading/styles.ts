import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.COLORS.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Label = styled.span`
  color: ${props => props.theme.COLORS.textColor400};
  font-weight: 700;
  font-size: 14px;
`