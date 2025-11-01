import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isChatPage = location.pathname === '/community'
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container 
        component="main" 
        maxWidth="xl"
        sx={{ 
          mt: 4,
          mb: 2,
          px: { xs: 2, sm: 3, md: 4 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </Container>
      {!isChatPage && (
        <Box
          component="footer"
          sx={{
            width: '100%',
            bgcolor: 'background.paper'
          }}
        >
          <Footer />
        </Box>
      )}
    </Box>
  )
}