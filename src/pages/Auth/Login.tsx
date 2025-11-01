import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const ok = await signIn(email, password);
      if (ok) {
        navigate(from, { replace: true });
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al intentar iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setError(null);
    setIsLoading(true);
    try {
      // Aquí iría la implementación real de autenticación social
      setError(`La autenticación con ${provider} no está implementada aún`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: 'auto', mt: 6, p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            disabled={isLoading}
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            disabled={isLoading}
          />

          {error && (
            <Typography color="error" sx={{ textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Ingresar'}
          </Button>

          <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
            O continuar con
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => handleSocialLogin('Facebook')}
              sx={{ flex: 1 }}
              disabled={isLoading}
            >
              Facebook
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => handleSocialLogin('Google')}
              sx={{ flex: 1 }}
              disabled={isLoading}
            >
              Google
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
