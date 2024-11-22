import { HashLoader } from "react-spinners"
import { Container, Label } from "./styles"
import { useTheme } from "styled-components"


const Loading = () => {
  const theme = useTheme()
  return (
    <Container>
      <HashLoader color={theme.COLORS.primary}/>
      <Label>Loading...</Label>
    </Container>
  )
}

export default Loading
