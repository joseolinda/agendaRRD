import { Routes, Route, Outlet } from "react-router-dom"
import Agenda from "./Agenda"
import HomePage from './Pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<span>Bem-vindo!</span>} />
        <Route path="agenda" element={<Outlet />}>  
          <Route index element={<h1>Página da agenda</h1>} />
          <Route path=":nome" element={<Agenda />} />
        </Route>
        <Route path="calendario" element={<h3>Mostrar calendário</h3>} />
      </Route>
    </Routes>
  )
}

export default App
