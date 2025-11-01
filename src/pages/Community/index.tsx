import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'
import ChatListItem from '../../components/community/ChatListItem'
import ChatWindow from '../../components/community/ChatWindow'
import { MOCK_CHATS } from '../../components/community/mockData'
import type { ChatGroup } from '../../components/community/mockData'

export default function Community() {
  const { t } = useTranslation()
  const [selectedChat, setSelectedChat] = useState<ChatGroup>(MOCK_CHATS[0])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChats = MOCK_CHATS.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold',
          mb: 3
        }}
      >
        {t('navigation.community')}
      </Typography>

      <Box 
        sx={{ 
          display: { xs: 'block', md: 'grid' },
          gridTemplateColumns: { md: '320px 1fr' },
          gap: 3,
          height: { xs: '100vh', md: 'calc(100vh - 180px)' },
          minHeight: { xs: '100vh', md: '600px' },
          position: 'relative'
        }}
      >
        {/* Panel izquierdo - Lista de chats */}
        <Paper 
          sx={{ 
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Buscar chats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          
          <Box sx={{ overflow: 'auto', flex: 1 }}>
            {filteredChats.map((chat) => (
              <ChatListItem
                key={chat.id}
                chat={chat}
                isSelected={selectedChat.id === chat.id}
                onClick={() => setSelectedChat(chat)}
              />
            ))}
          </Box>
        </Paper>

        {/* Panel derecho - Chat activo */}
        <Box sx={{ height: '100%', display: { xs: selectedChat ? 'block' : 'none', md: 'block' } }}>
          <ChatWindow chat={selectedChat} />
        </Box>
      </Box>
    </Box>
  )
}