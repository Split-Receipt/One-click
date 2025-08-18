import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Screen from './components/Screen.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Action from './components/Action.jsx'
import Overview from './components/Overview.jsx'
import '../i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Screen />
    <Overview />
    <Action />
    <Footer />
  </StrictMode>
)
