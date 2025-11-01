export interface Message {
  id: string
  text: string
  sender: string
  timestamp: string
  isOwn?: boolean
}

export interface ChatGroup {
  id: string
  name: string
  lastMessage: string
  unreadCount?: number
  avatar: string
  isActive: boolean
  messages: Message[]
  members: number
  type: 'general' | 'training' | 'nutrition'
}

export const MOCK_CHATS: ChatGroup[] = [
  {
    id: '1',
    name: 'Entrenamiento Grupal',
    lastMessage: '¿Alguien se apunta al HIIT de mañana?',
    unreadCount: 3,
    avatar: '/images/avatars/group-training.jpg',
    isActive: true,
    type: 'training',
    members: 128,
    messages: [
      {
        id: '1',
        sender: 'María García',
        text: '¡Hola! ¿Alguien se apunta al HIIT de mañana?',
        timestamp: '10:30',
      },
      {
        id: '2',
        sender: 'Carlos Ruiz',
        text: 'Yo me apunto, ¿a qué hora es?',
        timestamp: '10:32',
      },
      {
        id: '3',
        sender: 'Laura Mendez',
        text: 'La clase es a las 18:00, en la sala principal',
        timestamp: '10:33',
      },
      {
        id: '4',
        sender: 'Tú',
        text: '¡Genial! Yo también me uno',
        timestamp: '10:35',
        isOwn: true
      }
    ]
  },
  {
    id: '2',
    name: 'Nutrición y Recetas',
    lastMessage: 'Aquí está la receta del smoothie proteico',
    unreadCount: 1,
    avatar: '/images/avatars/group-nutrition.jpg',
    isActive: true,
    type: 'nutrition',
    members: 256,
    messages: [
      {
        id: '1',
        sender: 'Ana Nutrición',
        text: 'Buenos días! Hoy compartiremos recetas saludables post-entreno',
        timestamp: '09:00',
      },
      {
        id: '2',
        sender: 'Pedro Santos',
        text: '¿Podrías compartir la receta del smoothie proteico?',
        timestamp: '09:15',
      },
      {
        id: '3',
        sender: 'Ana Nutrición',
        text: 'Claro! Aquí está la receta del smoothie proteico: 1 plátano, 1 taza de leche de almendras, 1 scoop de proteína de vainilla, 1 cucharada de mantequilla de almendras',
        timestamp: '09:20',
      }
    ]
  },
  {
    id: '3',
    name: 'Chat General',
    lastMessage: 'Bienvenidos a todos los nuevos miembros!',
    avatar: '/images/avatars/group-general.jpg',
    isActive: true,
    type: 'general',
    members: 512,
    messages: [
      {
        id: '1',
        sender: 'Admin',
        text: '¡Bienvenidos a todos los nuevos miembros! 🎉',
        timestamp: '11:00',
      },
      {
        id: '2',
        sender: 'Sofia',
        text: '¡Gracias! Emocionada de ser parte de la comunidad',
        timestamp: '11:05',
      }
    ]
  }
]