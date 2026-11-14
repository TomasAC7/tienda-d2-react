
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pago.css'

function Pago() {
    const [carrito] = useState(
        JSON.parse(localStorage.getItem('carrito')) || []
    )

    const [metodo, setMetodo] = useState('Contra entrega')
    const [pedidoRealizado, setPedidoRealizado] = useState(false)

    const total = carrito.reduce(
        (suma, producto) => suma + producto.precio,
        0
    )

    function confirmarPago() {
        if (carrito.length === 0) {
            alert('No tienes productos en el carrito')
            return
        }

        localStorage.removeItem('carrito')
        setPedidoRealizado(true)
    }

    if (pedidoRealizado) {
        return (
            <div className="contenedor-pago">
                <h1>¡Pedido realizado!</h1>
                <p>Tu compra ha sido registrada correctamente.</p>
                <p>Metodo de pago: {metodo}</p>
                <Link to="/catalogo">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="contenedor-pago">
            <h1>Finalizar compra</h1>

            <h2>Resumen del pedido</h2>

            {carrito.length === 0 ? (
                <p>No hay productos para pagar.</p>
            ) : (
                <>
                    {carrito.map((producto, index) => (
                        <div className="resumen-producto" key={index}>
                            <span>{producto.nombre}</span>
                            <span>
                                ${producto.precio.toLocaleString('es-CO')} COP
                            </span>
                        </div>
                    ))}

                    <h2>
                        Total: ${total.toLocaleString('es-CO')} COP
                    </h2>

                    <label htmlFor="metodo">Metodo de pago:</label>

                    <select
                        id="metodo"
                        value={metodo}
                        onChange={(e) => setMetodo(e.target.value)}
                    >
                        <option value="Contra entrega">Pago contra entrega</option>
                        <option value="Transferencia simulada">Transferencia (simulación)</option>
                    </select>

                    <button onClick={confirmarPago}>
                        Confirmar pedido
                    </button>
                </>
            )}

            <Link to="/carrito">Volver al carrito</Link>
        </div>
    )
}

export default Pago
