import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Products from './pages/Products'
import Training from './pages/Training'
import Nutrition from './pages/Nutrition'
import Community from './pages/Community'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Training />} />
        <Route path="/products" element={<Products />} />
        <Route path="/training" element={<Training />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Layout>
  )
}
