import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = React.useState(location.pathname)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: '#FF0066' }}>
        <Toolbar 
          sx={{ 
            justifyContent: 'center',
            flexDirection: 'column',
            py: 2 // Añadimos más padding vertical para acomodar las dos líneas
          }}
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '1.75rem' },
              mb: 0.5  // Margen inferior para separar del eslogan
            }}
          >
            FitApp
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              opacity: 0.9,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              fontWeight: 'normal'
            }}
          >
            Tu compañero digital para entrenar, alimentarte y equiparte mejor
          </Typography>
        </Toolbar>
        <Box sx={{ bgcolor: '#000000', mt: 2 }}>
          <Tabs 
            value={value} 
            onChange={handleChange}
            variant="fullWidth"
            sx={{ 
              '& .MuiTab-root': {
                color: '#ffffff',
                opacity: 0.7,
                transition: 'all 0.3s',
                '&:hover': {
                  opacity: 0.9,
                  bgcolor: 'rgba(255, 0, 102, 0.1)',
                },
                '&.Mui-selected': {
                  color: '#FF0066',
                  opacity: 1,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '1.5rem',
                  mb: 0.5,
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FF0066',
                height: 3,
              },
            }}
          >
            <Tab 
              icon={<FitnessCenterIcon />} 
              label="Entrenamiento" 
              value="/training"
              sx={{ py: 2 }}
            />
            <Tab 
              icon={<RestaurantIcon />} 
              label="Alimentación" 
              value="/nutrition"
              sx={{ py: 2 }}
            />
            <Tab 
              icon={<GroupIcon />} 
              label="Comunidad" 
              value="/community"
              sx={{ py: 2 }}
            />
            <Tab 
              icon={<ShoppingCartIcon />} 
              label="Tienda" 
              value="/"
              sx={{ py: 2 }}
            />
          </Tabs>
        </Box>
      </AppBar>
      <Container 
        component="main" 
        maxWidth="xl"
        sx={{ 
          mt: 4, 
          mb: 4,
          px: { xs: 2, sm: 3, md: 4 } // Padding responsivo
        }}
      >
        {children}
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto' }}>
        <Typography variant="caption">© {new Date().getFullYear()} deiberepos</Typography>
      </Box>
    </Box>
  )
}
