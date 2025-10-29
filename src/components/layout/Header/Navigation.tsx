import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { headerStyles } from './styles'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [value, setValue] = useState(location.pathname)

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Box sx={headerStyles.navigationContainer}>
      <Tabs 
        value={value} 
        onChange={handleChange}
        variant="fullWidth"
        sx={headerStyles.tabs}
      >
        <Tab 
          icon={<FitnessCenterIcon />} 
          label={t('navigation.training')} 
          value="/training" 
        />
        <Tab 
          icon={<RestaurantIcon />} 
          label={t('navigation.nutrition')} 
          value="/nutrition" 
        />
        <Tab 
          icon={<GroupIcon />} 
          label={t('navigation.community')} 
          value="/community" 
        />
        <Tab 
          icon={<ShoppingCartIcon />} 
          label={t('navigation.store')} 
          value="/" 
        />
      </Tabs>
    </Box>
  )
}