import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Products from './pages/Products'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </Layout>
  )
}
