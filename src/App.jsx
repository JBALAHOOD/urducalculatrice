import React from 'react'
import Calculator from './pages/Calculator'
import SEOFooter from './components/SEOFooter'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Calculator />
      <SEOFooter />
    </div>
  )
}

export default App