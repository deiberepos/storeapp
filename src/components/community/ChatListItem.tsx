import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Badge from '@mui/material/Badge'
import type { ChatGroup } from './mockData'

interface ChatListItemProps {
  chat: ChatGroup
  isSelected: boolean
  onClick: () => void
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, isSelected, onClick }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 1,
        cursor: 'pointer',
        backgroundColor: isSelected ? 'action.selected' : 'background.paper',
        '&:hover': {
          backgroundColor: 'action.hover'
        },
        transition: 'background-color 0.2s'
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          color={chat.isActive ? 'success' : 'default'}
        >
          <Avatar
            alt={chat.name}
            src={chat.avatar}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
        </Badge>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
              {chat.name}
            </Typography>
            {chat.unreadCount && (
              <Typography
                variant="caption"
                sx={{
                  ml: 1,
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 'bold'
                }}
              >
                {chat.unreadCount}
              </Typography>
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{ 
              maxWidth: '100%',
              opacity: 0.8
            }}
          >
            {chat.lastMessage}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ 
              display: 'block',
              mt: 0.5
            }}
          >
            {chat.members} miembros
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default ChatListItem