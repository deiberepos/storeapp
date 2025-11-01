import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'

export default function Footer() {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              letterSpacing: 1,
              fontSize: { xs: '1.5rem', sm: '1.75rem' }
            }}
          >
            FitApp
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              textAlign: 'center',
              opacity: 0.9,
              letterSpacing: 0.5
            }}
          >
            Tu compañero perfecto para un estilo de vida saludable
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
              mt: 1,
              fontSize: '0.75rem',
              fontStyle: 'italic'
            }}
          >
            © {new Date().getFullYear()} deiberepos
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}