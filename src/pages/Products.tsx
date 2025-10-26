import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const sampleProducts = [
  { id: 'p1', name: 'Guantes de Box', price: '35.00', image: '' },
  { id: 'p2', name: 'Mancuernas 10kg', price: '120.00', image: '' },
  { id: 'p3', name: 'Cinturón de Levantamiento', price: '55.00', image: '' },
]

export default function Products() {
  return (
    <Grid container spacing={3}>
      {sampleProducts.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <Card>
            {p.image && (
              <CardMedia component="img" height="140" image={p.image} alt={p.name} />
            )}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {p.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${p.price}
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained">Ver</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
