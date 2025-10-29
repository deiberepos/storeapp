

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

const sampleProducts = [
  { id: 'p1', name: 'Guantes de Box', price: '35.00', image: '' },
  { id: 'p2', name: 'Mancuernas 10kg', price: '120.00', image: '' },
  { id: 'p3', name: 'Cinturón de Levantamiento', price: '55.00', image: '' },
]

export default function Products() {
  const { t } = useTranslation()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-12px' }}>
      {sampleProducts.map((p) => (
        <Box key={p.id} sx={{ width: '100%', padding: '12px', maxWidth: { xs: '100%', sm: '50%', md: '33.333%' } }}>
          <Card 
            sx={{ 
              width: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6,
              },
            }}
          >
            {p.image ? (
              <CardMedia component="img" height="200" image={p.image} alt={p.name} />
            ) : (
              <Box 
                sx={{ 
                  height: 200, 
                  bgcolor: 'rgba(255, 0, 102, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {t('products.noImage')}
                </Typography>
              </Box>
            )}
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div"
                sx={{ 
                  fontWeight: 'bold',
                  color: 'text.primary' 
                }}
              >
                {p.name}
              </Typography>
              <Typography 
                variant="h5" 
                color="primary"
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                {t('products.currency')}{p.price}
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
              >
                {t('products.addToCart')}
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  )
}
