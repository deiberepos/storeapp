import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SearchIcon from '@mui/icons-material/Search'
import NutritionCard from './NutritionCard'

interface NutritionPlan {
  id: string
  title: string
  description: string
  category: 'balanced' | 'vegetarian' | 'protein' | 'lowcarb' | 'vegan' | 'keto'
  calories: string
  time: string
  imageUrl: string
  tags: string[]
}

const MOCK_NUTRITION: NutritionPlan[] = [
  {
    id: '1',
    title: 'Bowl de Quinoa',
    description: 'Bowl equilibrado rico en proteínas y grasas saludables. Perfecto para después del entrenamiento.',
    category: 'balanced',
    calories: '450 kcal',
    time: '20 min',
    imageUrl: './images/nutrition/Bowl.png',
    tags: ['Sin Gluten', 'Alto en Proteína', 'Vegetariano']
  },
  {
    id: '2',
    title: 'Smoothie Energético',
    description: 'Batido repleto de nutrientes y antioxidantes. Ideal para comenzar el día o como snack pre-entrenamiento.',
    category: 'vegan',
    calories: '280 kcal',
    time: '5 min',
    imageUrl: './images/nutrition/Smoothie.png',
    tags: ['Vegano', 'Sin Gluten', 'Rico en Vitaminas']
  },
  {
    id: '3',
    title: 'Tortilla Saludable',
    description: 'Tortilla proteica preparada con claras de huevo y vegetales. Perfecta para una cena ligera y nutritiva.',
    category: 'protein',
    calories: '320 kcal',
    time: '15 min',
    imageUrl: './images/nutrition/tortilla.png',
    tags: ['Alto en Proteína', 'Bajo en Grasa', 'Sin Gluten']
  },
  {
    id: '4',
    title: 'Bowl Tropical',
    description: 'Bowl refrescante con frutas exóticas y semillas. Rica fuente de vitaminas y antioxidantes.',
    category: 'vegan',
    calories: '380 kcal',
    time: '10 min',
    imageUrl: './images/nutrition/Bowl_tropical.png',
    tags: ['Vegano', 'Sin Gluten', 'Rico en Fibra']
  },
  {
    id: '5',
    title: 'Pancakes Proteicos',
    description: 'Deliciosos pancakes ricos en proteína. Ideales para un desayuno post-entrenamiento.',
    category: 'protein',
    calories: '420 kcal',
    time: '15 min',
    imageUrl: './images/nutrition/Pancakes_Proteicos.png',
    tags: ['Alto en Proteína', 'Bajo en Azúcar', 'Pre-entreno']
  },
  {
    id: '6',
    title: 'Salmón al Horno',
    description: 'Salmón rico en ácidos grasos omega-3, perfecto para una cena saludable y nutritiva.',
    category: 'protein',
    calories: '480 kcal',
    time: '25 min',
    imageUrl: './images/nutrition/Salmon.png',
    tags: ['Alto en Proteína', 'Omega-3', 'Sin Gluten']
  },
  {
    id: '7',
    title: 'Sopa Detox Verde',
    description: 'Sopa depurativa rica en vegetales verdes. Ideal para días de recuperación.',
    category: 'vegan',
    calories: '220 kcal',
    time: '30 min',
    imageUrl: './images/nutrition/Sopa_detox_verde.png',
    tags: ['Detox', 'Bajo en Calorías', 'Vegano']
  },
  {
    id: '8',
    title: 'Tostada de Aguacate',
    description: 'Tostada con aguacate y huevo, rica en grasas saludables y proteínas.',
    category: 'balanced',
    calories: '340 kcal',
    time: '10 min',
    imageUrl: './images/nutrition/Tostada_de_aguacate.png',
    tags: ['Vegetariano', 'Grasas Saludables', 'Desayuno']
  },
  {
    id: '9',
    title: 'Wrap de Pollo',
    description: 'Wrap proteico con pollo y vegetales. Perfecto para llevar como almuerzo.',
    category: 'protein',
    calories: '410 kcal',
    time: '15 min',
    imageUrl: './images/nutrition/Wrap_de_pollo.png',
    tags: ['Alto en Proteína', 'Bajo en Grasa', 'Para Llevar']
  }
]

export default function NutritionList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

  const handleCategoryChange = (_: React.MouseEvent<HTMLElement>, newCategory: string | null) => {
    setCategoryFilter(newCategory)
  }

  const filteredNutrition = MOCK_NUTRITION.filter((plan) => {
    const matchesSearch = plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !categoryFilter || plan.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Box 
        sx={{ 
          mb: 4,
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar planes de alimentación..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ 
            mb: 2,
            '& .MuiOutlinedInput-root': {
              bgcolor: 'background.paper',
              '&:hover': {
                '& fieldset': { borderColor: 'primary.main' }
              }
            }
          }}
        />
        <ToggleButtonGroup
          value={categoryFilter}
          exclusive
          onChange={handleCategoryChange}
          aria-label="Categoría de alimentación"
          sx={{ 
            width: '100%',
            gap: 1,
            flexWrap: 'wrap',
            '& .MuiToggleButton-root': {
              flex: { xs: '1 1 calc(33.333% - 8px)', sm: '1 1 auto' },
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 500,
              '&.Mui-selected': {
                bgcolor: (theme) => `${theme.palette.primary.main} !important`,
                color: 'white',
                boxShadow: 2
              },
              '&:hover': {
                bgcolor: 'rgba(255, 0, 102, 0.08)'
              }
            },
          }}
        >
          <ToggleButton value="balanced">Equilibrado</ToggleButton>
          <ToggleButton value="vegetarian">Vegetariano</ToggleButton>
          <ToggleButton value="protein">Alto en Proteína</ToggleButton>
          <ToggleButton value="lowcarb">Bajo en Carbos</ToggleButton>
          <ToggleButton value="vegan">Vegano</ToggleButton>
          <ToggleButton value="keto">Keto</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box 
        component="div" 
        sx={{ 
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          }
        }}
      >
        {filteredNutrition.map((plan) => (
          <NutritionCard key={plan.id} {...plan} />
        ))}
      </Box>
    </Box>
  )
}