import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import type { ChatGroup } from './mockData'

interface ChatProps {
  chat: ChatGroup
}

const ChatWindow: React.FC<ChatProps> = ({ chat }) => {
  const [messages, setMessages] = useState(chat.messages)
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        text: newMessage.trim(),
        sender: 'Tú',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <Box sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: { xs: 'fixed', md: 'relative' },
        top: { xs: 0, md: 'auto' },
        left: { xs: 0, md: 'auto' },
        right: { xs: 0, md: 'auto' },
        bottom: { xs: 0, md: 'auto' },
        width: '100%',
        zIndex: { xs: (theme) => theme.zIndex.appBar + 1, md: 1 }
      }}
    >
      <Paper 
        sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
      {/* Header del chat */}
      <Box 
        sx={{ 
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Avatar 
          src={chat.avatar}
          alt={chat.name}
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <Box>
          <Typography variant="h6">{chat.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {chat.members} miembros • {chat.isActive ? 'Activo' : 'Inactivo'}
          </Typography>
        </Box>
      </Box>

      {/* Área de mensajes */}
      <Box 
        sx={{ 
          flexGrow: 1,
          position: 'relative',
          bgcolor: (theme) => theme.palette.mode === 'dark' 
            ? 'background.default'
            : 'grey.50',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{ 
            height: '100%',
            overflow: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'flex-end'
          }}
        >
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxHeight: '100%'
          }}>
            {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              flexDirection: message.isOwn ? 'row-reverse' : 'row',
              gap: 1,
              maxWidth: '80%',
              alignSelf: message.isOwn ? 'flex-end' : 'flex-start'
            }}
          >
            {!message.isOwn && (
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt={message.sender}
              />
            )}
            <Box>
              {!message.isOwn && (
                <Typography
                  variant="caption"
                  sx={{ 
                    display: 'block',
                    mb: 0.5,
                    color: 'text.secondary'
                  }}
                >
                  {message.sender}
                </Typography>
              )}
              <Paper
                sx={{
                  p: 1.5,
                  backgroundColor: message.isOwn 
                    ? 'primary.main'
                    : 'background.paper',
                  color: message.isOwn ? 'white' : 'text.primary'
                }}
              >
                <Typography variant="body2">
                  {message.text}
                </Typography>
              </Paper>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 0.5,
                  color: 'text.secondary',
                  textAlign: message.isOwn ? 'right' : 'left'
                }}
              >
                {message.timestamp}
              </Typography>
            </Box>
          </Box>
        ))}
            <div ref={messagesEndRef} />
          </Box>
        </Box>
      </Box>

      {/* Área de input */}
      <Box 
        component="form" 
        onSubmit={handleSendMessage}
        sx={{ 
          p: 1.5,
          borderTop: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          display: 'flex',
          gap: 1,
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar - 1
        }}
      >
        <TextField
          fullWidth
          size="medium"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        <IconButton 
          color="primary" 
          type="submit"
          disabled={!newMessage.trim()}
          sx={{ 
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark'
            },
            '&.Mui-disabled': {
              bgcolor: 'action.disabledBackground',
              color: 'action.disabled'
            }
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        height: '50px',
        py: 0.5,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.1,
              flex: 1
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                letterSpacing: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              FitApp-B
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                color: 'grey.500'
              }}
            >
              Tu compañero perfecto para un estilo de vida saludable
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              color: 'grey.500',
              textAlign: 'right'
            }}
          >
            © 2025 deiberepos
          </Typography>
        </Box>
      </Container>
    </Box>
  </Box>
  )
}

export default ChatWindow