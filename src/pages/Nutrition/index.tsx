import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NutritionList from '../../components/nutrition/NutritionList'
import { useTranslation } from 'react-i18next'

export default function Nutrition() {
  const { t } = useTranslation()
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold',
          mb: 3
        }}
      >
        {t('navigation.nutrition')}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4,
          color: 'text.secondary',
          maxWidth: 'md'
        }}
      >
        Descubre nuestros planes de alimentación personalizados para alcanzar tus objetivos.
        Desde opciones equilibradas hasta planes específicos para diferentes estilos de vida.
      </Typography>
      
      <NutritionList />
    </Box>
  )
}