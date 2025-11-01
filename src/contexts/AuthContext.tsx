import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface DefaultUser {
  email: string;
  password: string;
}

type User = { email: string } | null;
type AuthContextType = {
  user: User;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

// Usuarios de prueba para el prototipo
// TODO: Reemplazar con una implementación real de autenticación
const DEFAULT_USERS: DefaultUser[] = [
  {
    email: 'usuario1@example.com',
    password: 'password123'
  },
  {
    email: 'usuario2@example.com',
    password: 'password123'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const signIn = async (email: string, password: string) => {
    const found = DEFAULT_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({ email: found.email });
      return true;
    }
    return false;
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
