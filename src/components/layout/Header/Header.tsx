import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Navigation from './Navigation'
import { headerStyles } from './styles'

export default function Header() {
  const { t } = useTranslation()

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <Typography variant="h6" component="div" sx={headerStyles.title}>
          {t('app.name')}
        </Typography>
        <Typography variant="subtitle2" sx={headerStyles.slogan}>
          {t('app.slogan')}
        </Typography>
      </Toolbar>
      <Navigation />
    </AppBar>
  )
}