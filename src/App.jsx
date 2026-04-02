import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HireTalentPage from './pages/HireTalentPage'
import ResultsPage from './pages/ResultsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hire" element={<HireTalentPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
