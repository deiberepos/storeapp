import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'

interface TrainingCardProps {
  title: string
  description: string
  level: 'principiante' | 'intermedio' | 'avanzado'
  duration: string
  equipment: string[]
  type: 'fullbody' | 'cardio' | 'yoga' | 'core' | 'strength' | 'flexibility'
}

export default function TrainingCard({
  title,
  description,
  level,
  duration,
  equipment,
  type
}: TrainingCardProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'principiante':
        return '#4CAF50'
      case 'intermedio':
        return '#FF9800'
      case 'avanzado':
        return '#F44336'
      default:
        return '#4CAF50'
    }
  }

  const getTrainingStyle = () => {
    switch (type) {
      case 'fullbody':
        return {
          icon: <SportsMartialArtsIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#FF0066'
        }
      case 'cardio':
        return {
          icon: <DirectionsRunIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#E6005C'
        }
      case 'yoga':
        return {
          icon: <SelfImprovementIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#FF3385'
        }
      case 'core':
        return {
          icon: <SportsGymnasticsIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#FF1A75'
        }
      case 'strength':
        return {
          icon: <FitnessCenterIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#FF0088'
        }
      case 'flexibility':
        return {
          icon: <SportsMartialArtsIcon sx={{ 
            fontSize: 60,
            color: 'white',
            transform: 'scaleX(-1)' // Volteamos el ícono horizontalmente para diferenciarlo
          }} />,
          color: 'white',
          bgColor: '#CC0052'
        }
      default:
        return {
          icon: <FitnessCenterIcon sx={{ fontSize: 60, color: 'white' }} />,
          color: 'white',
          bgColor: '#FF0066'
        }
    }
  }

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <Box 
        sx={{ 
          height: 200, 
          bgcolor: getTrainingStyle().bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 0.9,
            transform: 'scale(1.02)'
          }
        }}
      >
        {getTrainingStyle().icon}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pb: '16px !important' }}>
        <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              label={level.charAt(0).toUpperCase() + level.slice(1)}
              size="small"
              sx={{
                bgcolor: getLevelColor(),
                color: 'white',
                fontWeight: 'bold'
              }}
            />
            <Chip
              icon={<AccessTimeIcon />}
              label={duration}
              size="small"
              variant="outlined"
            />
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {equipment.map((item) => (
                <Chip
                  key={item}
                  icon={<FitnessCenterIcon />}
                  label={item}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem' }}
                />
              ))}
            </Box>
            <Button 
              variant="contained" 
              size="small"
              sx={{ 
                bgcolor: '#FF0066',
                '&:hover': {
                  bgcolor: '#E5005C'
                },
                textTransform: 'none',
                fontWeight: 500,
                minWidth: 'auto',
                ml: 1,
                borderRadius: 8,
                px: 2
              }}
            >
              Elegir entrenador
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}