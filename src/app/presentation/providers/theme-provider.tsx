import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

import { ThemeProvider as MuiThemeProvider, useMediaQuery } from '@mui/material'

import { ThemeContext } from '~/app/presentation/contexts'
import { makeDarkTheme, makeLightTheme } from '~/app/presentation/styles'

interface Props {
  children: ReactNode
}
const ThemeProvider = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(makeLightTheme())

  useEffect(() => {
    if (prefersDarkMode) {
      setTheme(makeDarkTheme())
    }
  }, [prefersDarkMode])

  const toggleTheme = (): void => {
    const newTheme =
      theme.palette.mode === 'light' ? makeDarkTheme() : makeLightTheme()
    setTheme(newTheme)
  }

  const themeMode = useMemo(
    () =>
      theme.palette.mode === 'light' ? <MdBrightness4 /> : <MdBrightness7 />,
    [theme.palette.mode]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme, mode: themeMode }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
