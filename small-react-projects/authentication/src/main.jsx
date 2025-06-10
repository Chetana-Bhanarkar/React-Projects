import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path='/login' element={<Login/>}>Login</Route>
      <Route path='/register' element={<Register/>}>Register</Route>
    </Routes>
  </BrowserRouter>
)
