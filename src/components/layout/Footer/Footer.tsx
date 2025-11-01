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
        py: 0.5,
        px: 2,
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.1,
              flex: 1
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                letterSpacing: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              FitApp-B
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                textAlign: 'center',
                opacity: 0.9,
                letterSpacing: 0.5
              }}
            >
              Tu compañero perfecto para un estilo de vida saludable
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.75rem',
              fontStyle: 'italic',
              pl: 2
            }}
          >
            © {new Date().getFullYear()} deiberepos
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}