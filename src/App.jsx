import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import Pago from './pages/Pago'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pago" element={<Pago />} />
        </Routes>
    )
}

export default App