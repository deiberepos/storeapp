import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container 
        component="main" 
        maxWidth="xl"
        sx={{ 
          mt: 4, 
          mb: 4,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {children}
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto' }}>
        <Typography variant="caption">© {new Date().getFullYear()} deiberepos</Typography>
      </Box>
    </Box>
  )
}