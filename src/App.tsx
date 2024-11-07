import { useEffect } from "react"
import { useAuth } from "./hooks/auth"
import { useTheme } from "./hooks/theme"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./themes/lightThemet"
import { darkTheme } from "./themes/darkTheme"
import { MainRoutes } from "./routes"

const App = () => {
  const {handleAuthenticateUser} = useAuth()
  const {handleInitTheme, theme} = useTheme()


  useEffect(()=>{
    // authenticate user using token saved in local storage
    handleAuthenticateUser()

    //apply theme saved by user to local storage
    handleInitTheme()
  })

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <MainRoutes/>
    </ThemeProvider>
  )
}

export default App
