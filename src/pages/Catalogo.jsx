
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Catalogo.css'

function Catalogo() {
    const [productos, setProductos] = useState([])
    const [cantidad, setCantidad] = useState(
        JSON.parse(localStorage.getItem('carrito'))?.length || 0
    )

    useEffect(() => {
        fetch('https://tienda-d2-backend.onrender.com/api/productos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener productos')
                }
                return response.json()
            })
            .then(data => {
                setProductos(data)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [])

    function agregarProducto(producto) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || []

        carrito.push(producto)

        localStorage.setItem('carrito', JSON.stringify(carrito))

        setCantidad(carrito.length)

        alert('Producto agregado al carrito')
    }

    return (
        <div>
            <header className="barra-superior">
                <h2>Tienda D2</h2>

                <div>
                    <Link to="/carrito">
                        Ver Carrito ({cantidad})
                    </Link>

                    <Link to="/">
                        Cerrar Sesion
                    </Link>
                </div>
            </header>

            <main className="contenedor-catalogo">
                <h1>Catalogo de Productos</h1>

                <div className="productos">
                    {productos.map((producto) => (
                        <div className="tarjeta-producto" key={producto._id}>
                            <span>{producto.categoria}</span>

                            <h3>{producto.nombre}</h3>

                            <p>
                                ${producto.precio.toLocaleString('es-CO')} COP
                            </p>

                            <button onClick={() => agregarProducto(producto)}>
                                Agregar al Carrito
                            </button>
                        </div>
                    ))}
                </div>

                {productos.length === 0 && (
                    <p>No hay productos registrados.</p>
                )}
            </main>
        </div>
    )
}

export default Catalogo
