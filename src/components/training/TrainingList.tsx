import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SearchIcon from '@mui/icons-material/Search'
import TrainingCard from './TrainingCard'

interface Training {
  id: string
  title: string
  description: string
  level: 'principiante' | 'intermedio' | 'avanzado'
  duration: string
  equipment: string[]
  type: 'fullbody' | 'cardio' | 'yoga' | 'core' | 'strength' | 'flexibility'
}

const MOCK_TRAININGS: Training[] = [
  {
    id: '1',
    title: 'Entrenamiento Full Body',
    description: 'Rutina completa para trabajar todo el cuerpo en una sesión efectiva. Incluye ejercicios compuestos para maximizar resultados.',
    level: 'principiante',
    duration: '45 min',
    equipment: ['Mancuernas', 'Esterilla'],
    type: 'fullbody'
  },
  {
    id: '2',
    title: 'HIIT Cardio',
    description: 'Entrenamiento de alta intensidad con intervalos de 30/30 para máxima quema de calorías y mejora cardiovascular.',
    level: 'avanzado',
    duration: '30 min',
    equipment: ['Ninguno'],
    type: 'cardio'
  },
  {
    id: '3',
    title: 'Core y Abdominales',
    description: 'Fortalece tu núcleo con esta rutina específica. Combina ejercicios isométricos y dinámicos.',
    level: 'intermedio',
    duration: '20 min',
    equipment: ['Esterilla', 'Banda elástica'],
    type: 'core'
  },
  {
    id: '4',
    title: 'Piernas y Glúteos',
    description: 'Rutina enfocada en el tren inferior. Perfecta para ganar fuerza y definición en piernas y glúteos.',
    level: 'intermedio',
    duration: '50 min',
    equipment: ['Barra', 'Discos', 'Banco'],
    type: 'strength'
  },
  {
    id: '5',
    title: 'Yoga para Principiantes',
    description: 'Introducción al yoga con posturas básicas. Mejora tu flexibilidad y reduce el estrés.',
    level: 'principiante',
    duration: '40 min',
    equipment: ['Esterilla', 'Bloque de yoga'],
    type: 'yoga'
  },
  {
    id: '6',
    title: 'Estiramientos Avanzados',
    description: 'Rutina de flexibilidad avanzada para mejorar el rango de movimiento y prevenir lesiones.',
    level: 'avanzado',
    duration: '35 min',
    equipment: ['Esterilla', 'Banda elástica'],
    type: 'flexibility'
  }
]

export default function TrainingList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState<string | null>(null)

  const handleLevelChange = (_: React.MouseEvent<HTMLElement>, newLevel: string | null) => {
    setLevelFilter(newLevel)
  }

  const filteredTrainings = MOCK_TRAININGS.filter((training) => {
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         training.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = !levelFilter || training.level === levelFilter
    return matchesSearch && matchesLevel
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
          placeholder="Buscar entrenamientos..."
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
          value={levelFilter}
          exclusive
          onChange={handleLevelChange}
          aria-label="Nivel de dificultad"
          sx={{ 
            width: '100%',
            gap: 1,
            '& .MuiToggleButton-root': {
              flex: 1,
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
          <ToggleButton value="principiante">
            Principiante
          </ToggleButton>
          <ToggleButton value="intermedio">
            Intermedio
          </ToggleButton>
          <ToggleButton value="avanzado">
            Avanzado
          </ToggleButton>
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
        {filteredTrainings.map((training) => (
          <TrainingCard key={training.id} {...training} />
        ))}
      </Box>
    </Box>
  )
}