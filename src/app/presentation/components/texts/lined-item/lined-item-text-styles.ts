import { Box, styled, Theme } from '@mui/material'

import { includesForwardProps } from '~/app/presentation/common/helpers'

type StyledProps = {
  textColor: 'gray' | 'white' | 'black'
}

export const Wrapper = styled('div')(() => ({
  marginBottom: '0.5rem',
  zIndex: 1
}))

export const IconContent = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: 'inline',
  marginBottom: theme.spacing(-1),
  marginLeft: theme.spacing(-0.5)
}))

type HandleColorProps = {
  theme: Theme
} & StyledProps

const handleColor = ({ textColor, theme }: HandleColorProps) =>
  ({
    gray: theme.palette.grey[900],
    white: theme.palette.common.white,
    black: theme.palette.common.black
  }[textColor])

const TextPropsArray = ['textColor']
export const Text = styled('h2', {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, TextPropsArray)
})<StyledProps>(({ textColor, theme }) => ({
  textTransform: 'uppercase',
  marginLeft: '0.25rem',
  display: 'inline',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '0.75rem',
  color: handleColor({ textColor, theme })
}))
