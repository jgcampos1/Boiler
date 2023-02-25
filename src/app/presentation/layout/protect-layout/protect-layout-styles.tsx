import { Box, styled } from '@mui/material'
import { Colors } from '../../styles'

export const Container = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: Colors.BackgroundLayout
}))
