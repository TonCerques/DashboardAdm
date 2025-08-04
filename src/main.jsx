import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import Login from './pages/login/Login'
import PainelControle from './pages/painelControle/PainelControle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login />} />
      <Route path='/painelControle' element={<PainelControle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
