import { Box, CircularProgress, CssBaseline } from '@mui/material'

const FullPageLoading = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CssBaseline />
      <CircularProgress />
    </Box>
  )
}

export default FullPageLoading
