import { createRoot } from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { theme } from '~/app/presentation/styles'
import Router from '~/app/main/router/router'
const Container = document.querySelector('#root')
const root = createRoot(Container!)
root.render(
  <>
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </>
)
