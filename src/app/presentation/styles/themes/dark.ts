import { createTheme, Theme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const makeDarkTheme = (): Theme =>
  createTheme({
    palette: {
      mode: 'dark'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            html: {
              overflow: 'auto',
              overflowX: 'hidden'
            },
            '*::-webkit-scrollbar': {
              width: '6px'
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: grey[400],
              borderRadius: '8px',
              backgroundClip: 'padding-box'
            },
            body: {
              paddingRight: '0px !important'
            }
          }
        }
      }
    }
  })
