import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

export default function Spokesperson() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.default',
          pt: 8,
          pb: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              mb: 3
            }}
          >
            Nuestro Portavoz Oficial
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}
          >
            Conoce al campeón que representa los valores de FitApp-B: disciplina, 
            autocuidado y excelencia en el bodybuilding
          </Typography>
        </Container>
      </Box>

      {/* Bio Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center'
        }}>
          <Box sx={{ flex: 1 }}>
            <Paper 
              elevation={3}
              sx={{
                overflow: 'hidden',
                borderRadius: 2
              }}
            >
              <Box
                component="img"
                src="/images/portavoz/kayla.png"
                alt="Kayla Itsines"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Paper>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Kayla Itsines
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Entrenadora personal certificada
            </Typography>
            <Typography variant="body1" paragraph>
              Con más de una década de experiencia en el mundo del fitness, Kayla Itsines 
              se ha convertido en un referente mundial del entrenamiento personal. Su enfoque 
              se centra en ayudar a las personas a alcanzar sus objetivos de forma saludable 
              y sostenible.
            </Typography>
            <Typography variant="body1" paragraph>
              Creadora del programa BBG (Bikini Body Guide) y co-fundadora de SWEAT, 
              una de las plataformas de fitness más exitosas a nivel global. Su método 
              ha transformado la vida de millones de personas en todo el mundo.
            </Typography>

            {/* Quote */}
            <Paper
              sx={{
                backgroundColor: 'pink',
                p: 3,
                borderRadius: 4,
                mt: 4,
                mb: 4
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontStyle: 'italic',
                  color: 'error.main'
                }}
              >
                "No se trata de ser perfecta, se trata de ser más fuerte que ayer. 
                Cada entrenamiento es una victoria, cada día saludable es un paso hacia 
                la mejor versión de ti misma."
              </Typography>
            </Paper>

            {/* Stats */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 4,
                mt: 4
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="error.main" sx={{ fontWeight: 'bold' }}>
                  50M+
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Mujeres Transformadas
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="error.main" sx={{ fontWeight: 'bold' }}>
                  15M+
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Seguidores
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="error.main" sx={{ fontWeight: 'bold' }}>
                  10+
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Años Inspirando
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="error.main" sx={{ fontWeight: 'bold' }}>
                  #1
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  App Fitness Mundial
                </Typography>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mt: 4,
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <Button
                variant="contained"
                color="error"
                size="large"
                fullWidth
              >
                Ver Rutina de Kayla
              </Button>
              <Button
                variant="contained"
                sx={{ 
                  bgcolor: 'black',
                  '&:hover': {
                    bgcolor: 'grey.900'
                  }
                }}
                size="large"
                fullWidth
              >
                Seguir en Redes
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
