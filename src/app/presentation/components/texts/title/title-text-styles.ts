import { Typography, styled } from '@mui/material'

import { includesForwardProps } from '~/app/presentation/common/helpers'

type Props = {
  colorType: 'light' | 'dark'
  toUpperCase?: boolean
  fontSize?: number
}

const TextPropsArray = ['colorType', 'toUpperCase']
export const Text = styled(Typography, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, TextPropsArray)
})<Props>(({ theme, colorType, toUpperCase, fontSize }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  fontSize: theme.typography.pxToRem(36),
  lineHeight: '40px',
  textTransform: toUpperCase ? 'uppercase' : 'none',
  color:
    colorType === 'light'
      ? theme.palette.common.white
      : theme.palette.common.black,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(fontSize || 24)
  }
}))
