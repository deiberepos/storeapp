import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Products from './pages/Products'
import Training from './pages/Training'
import Nutrition from './pages/Nutrition'
import Community from './pages/Community'
import Spokesperson from './pages/Spokesperson'
import Login from './pages/Auth/Login'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Training />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="/training" element={<Training />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route path="/spokesperson" element={<Spokesperson />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}
