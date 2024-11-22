import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setTheme } from "../redux/slices/themeSlice"

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY

export const useTheme = () => {
  const { theme } = useAppSelector(state => state.theme)

  const dispatch = useAppDispatch()

  const handleInitTheme = () => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (theme == 'light') {
      dispatch(setTheme('light'))
    } else if (theme == 'dark') {
      dispatch(setTheme('dark'))
    }
  }

  const handleToggleTheme = () =>{
    if (theme == 'light') {
      dispatch(setTheme('dark'))
      localStorage.setItem(LOCAL_STORAGE_KEY, 'dark')
    } else {
      dispatch(setTheme('light'))
      localStorage.setItem(LOCAL_STORAGE_KEY, 'light')
    }
  }

  return {
    theme,
    handleInitTheme,
    handleToggleTheme
  }
}


