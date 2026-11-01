
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Catalogo.css'

const productos = [
    { id: 1, nombre: 'Audifonos Gamer', categoria: 'Tecnologia', precio: 150000 },
    { id: 2, nombre: 'Camisa Algodon', categoria: 'Ropa', precio: 50000 },
    { id: 3, nombre: 'Cafetera', categoria: 'Hogar', precio: 220000 },
    { id: 4, nombre: 'Balon de Futbol', categoria: 'Deportes', precio: 80000 }
]

function Catalogo() {
    const [cantidad, setCantidad] = useState(
        JSON.parse(localStorage.getItem('carrito'))?.length || 0
    )

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
                        <div className="tarjeta-producto" key={producto.id}>
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
            </main>
        </div>
    )
}

export default Catalogo
