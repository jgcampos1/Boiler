import { createTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

import { Colors } from './index'

const HelveticaNeueThin = {
  fontFamily: '"Helvetica Neue Pro"',
  fontStyle: 'normal',
  fontWeight: 100,
  src: `local('Helvetica Neue Pro'), url(../../../public/fonts/HelveticaNeueCyr-Bold.woff2) format("woff2")`
}

const HelveticaNeueLight = {
  fontFamily: '"Helvetica Neue Pro"',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `local('Helvetica Neue Pro'), url(../../../public/fonts/HelveticaNeueCyr-Light.woff2) format("woff2")`
}

const HelveticaNeueRoman = {
  fontFamily: '"Helvetica Neue Pro"',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local('Helvetica Neue Pro'), url(../../../public/fonts/HelveticaNeueCyr-Medium.woff2) format("woff2")`
}

const HelveticaNeueMedium = {
  fontFamily: '"Helvetica Neue Pro"',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `local('Helvetica Neue Pro'), url(../../../public/fonts/HelveticaNeueCyr-Roman.woff2) format("woff2")`
}

const HelveticaNeueBold = {
  fontFamily: '"Helvetica Neue Pro"',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `local('Helvetica Neue Pro'), url(../../../public/fonts/HelveticaNeueCyr-Thin.woff2) format("woff2")`
}

const { typography } = createTheme()
const breakpoints = createBreakpoints({})

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary
    },
    secondary: {
      main: Colors.Secondary
    },
    background: {
      default: Colors.White
    },
    text: {
      primary: Colors.Dark,
      secondary: Colors.Primary
    },
    common: {
      black: Colors.Dark
    },
    error: {
      main: Colors.RedAlert
    },
    divider: Colors.BlueGray
  },
  typography: {
    htmlFontSize: 16,
    [breakpoints.up('md')]: {
      htmlFontSize: 14
    },

    fontFamily: 'Inter',
    h1: {
      fontSize: typography.pxToRem(28),
      fontWeight: 600
    },
    h2: {
      fontSize: typography.pxToRem(25),
      fontWeight: 600
    },
    h3: {
      fontSize: typography.pxToRem(20),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: typography.pxToRem(16),
      fontWeight: 600
    },
    body1: {
      fontSize: typography.pxToRem(16)
    },
    body2: {
      fontSize: typography.pxToRem(14)
    },
    caption: {
      fontSize: typography.pxToRem(14),
      fontWeight: 600
    },
    button: {
      fontSize: typography.pxToRem(16)
    }
  },
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '3px'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: Colors.ScrollBarColor,
          borderRadius: '8px',
          backgroundClip: 'padding-box'
        },
        '@font-face': [
          HelveticaNeueThin,
          HelveticaNeueLight,
          HelveticaNeueRoman,
          HelveticaNeueMedium,
          HelveticaNeueBold
        ]
      }
    }
  }
})
