import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

export default function Training() {
  const { t } = useTranslation()
  
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('navigation.training')}
      </Typography>
      <Typography variant="body1">
        Sección en desarrollo...
      </Typography>
    </Box>
  )
}