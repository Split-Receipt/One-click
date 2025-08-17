import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Screen from './components/Screen.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Screen />
    <Footer />
  </StrictMode>
)
