export const headerStyles = {
  appBar: {
    bgcolor: '#FF0066',
  },
  toolbar: {
    justifyContent: 'center',
    flexDirection: 'column',
    py: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: { xs: '1.5rem', sm: '1.75rem' },
  },
  slogan: {
    opacity: 0.9,
    fontSize: { xs: '0.8rem', sm: '0.9rem' },
    fontWeight: 'normal',
  },
  navigationContainer: {
    bgcolor: '#000000',
    mt: 2,
  },
  tabs: {
    '& .MuiTab-root': {
      color: '#ffffff',
      opacity: 0.7,
      transition: 'all 0.3s',
      py: 2,
      '&:hover': {
        opacity: 0.9,
        bgcolor: 'rgba(255, 0, 102, 0.1)',
      },
      '&.Mui-selected': {
        color: '#FF0066',
        opacity: 1,
      },
      '& .MuiSvgIcon-root': {
        fontSize: '1.5rem',
        mb: 0.5,
      },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#FF0066',
      height: 3,
    },
  },
} as const