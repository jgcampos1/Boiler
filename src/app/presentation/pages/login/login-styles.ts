import { styled, Box, Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3, 2.5),

  [theme.breakpoints.down('md')]: {
    boxSizing: 'border-box',
    height: '100%'
  }
}))
export const Content = styled(Box)(({ theme }) => ({
  maxWidth: 480,
  padding: 50
}))
