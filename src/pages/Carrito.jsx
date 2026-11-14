
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Carrito.css'

function Carrito() {
    const [carrito, setCarrito] = useState(
        JSON.parse(localStorage.getItem('carrito')) || []
    )

    function eliminarProducto(indice) {
        const nuevoCarrito = carrito.filter((producto, index) => index !== indice)

        setCarrito(nuevoCarrito)
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    }

    const total = carrito.reduce(
        (suma, producto) => suma + producto.precio,
        0
    )

    return (
        <div className="contenedor-carrito">
            <h1>Mi carrito</h1>

            {carrito.length === 0 ? (
                <p>Tu carrito esta vacio.</p>
            ) : (
                <div>
                    {carrito.map((producto, index) => (
                        <div className="producto-carrito" key={index}>
                            <div>
                                <h3>{producto.nombre}</h3>
                                <p>${producto.precio.toLocaleString('es-CO')} COP</p>
                            </div>

                            <button onClick={() => eliminarProducto(index)}>
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <h2>
                        Total: ${total.toLocaleString('es-CO')} COP
                    </h2>

                    <Link to="/pago">
                        <button className="btn-pagar">Continuar al pago</button>
                    </Link>
                </div>
            )}

            <Link to="/catalogo">Volver al catalogo</Link>
        </div>
    )
}

export default Carrito
