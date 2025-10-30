import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

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

const categoryColors = {
  balanced: {
    main: '#66BB6A',
    light: 'rgba(102, 187, 106, 0.1)',
    border: 'rgba(102, 187, 106, 0.25)'
  },
  vegetarian: {
    main: '#9CCC65',
    light: 'rgba(156, 204, 101, 0.1)',
    border: 'rgba(156, 204, 101, 0.25)'
  },
  protein: {
    main: '#7E57C2',
    light: 'rgba(126, 87, 194, 0.1)',
    border: 'rgba(126, 87, 194, 0.25)'
  },
  lowcarb: {
    main: '#42A5F5',
    light: 'rgba(66, 165, 245, 0.1)',
    border: 'rgba(66, 165, 245, 0.25)'
  },
  vegan: {
    main: '#26A69A',
    light: 'rgba(38, 166, 154, 0.1)',
    border: 'rgba(38, 166, 154, 0.25)'
  },
  keto: {
    main: '#EC407A',
    light: 'rgba(236, 64, 122, 0.1)',
    border: 'rgba(236, 64, 122, 0.25)'
  }
}

const NutritionCard: React.FC<NutritionPlan> = ({
  title,
  description,
  category,
  calories,
  time,
  imageUrl,
  tags
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        bgcolor: (categoryColors as any)[category].light,
        border: 1,
        borderColor: (categoryColors as any)[category].border,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[4],
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            p: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: (categoryColors as any)[category].main,
              color: 'white',
              textTransform: 'capitalize',
              fontWeight: 500
            }}
          />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {calories} | {time}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2"
          sx={{ 
            fontWeight: 600,
            color: (theme) => theme.palette.text.primary
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 3,
            color: (theme) => theme.palette.text.secondary,
            lineHeight: 1.6
          }}
        >
          {description}
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1, 
            mt: 'auto',
            '& .MuiChip-root': {
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: (categoryColors as any)[category].light,
                borderColor: (categoryColors as any)[category].main,
                color: (categoryColors as any)[category].main
              }
            }
          }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ 
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 500,
                bgcolor: 'background.paper'
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default NutritionCard