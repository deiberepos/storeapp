import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import TrainingList from '../../components/training/TrainingList'

export default function Training() {
  const { t } = useTranslation()
  
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t('navigation.training')}
      </Typography>
      <TrainingList />
    </Box>
  )
}