
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
    const navigate = useNavigate()

    function iniciarSesion(event) {
        event.preventDefault()
        navigate('/catalogo')
    }

    return (
        <div className="contenedor-login">
            <h2 className="titulo-tienda">Tienda D2</h2>

            <p className="subtitulo">
                Inicia sesion para comenzar a comprar
            </p>

            <form onSubmit={iniciarSesion}>
                <div className="campo">
                    <label htmlFor="correo">Correo electronico:</label>
                    <input
                        type="email"
                        id="correo"
                        placeholder="estudiante@pascualbravo.edu.co"
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div className="campo-check">
                    <input type="checkbox" id="captcha" required />
                    <label htmlFor="captcha">No soy un robot</label>
                </div>

                <button type="submit" className="btn-principal">
                    Entrar a la Tienda
                </button>
            </form>
        </div>
    )
}

export default Login
