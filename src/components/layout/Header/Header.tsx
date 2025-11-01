import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Navigation from './Navigation'
import { headerStyles } from './styles'
import { useAuth } from '../../../contexts/AuthContext'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { t } = useTranslation()
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <Typography variant="h6" component="div" sx={headerStyles.title}>
          {t('app.name')}
        </Typography>
        <Typography variant="subtitle2" sx={headerStyles.slogan}>
          {t('app.slogan')}
        </Typography>
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
          {user ? (
            <>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {user.email}
              </Typography>
              <Button
                color="inherit"
                onClick={() => {
                  signOut();
                  navigate('/');
                }}
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={() => navigate('/login')}
            >
              Iniciar sesión
            </Button>
          )}
        </Box>
      </Toolbar>
      <Navigation />
    </AppBar>
  )
}