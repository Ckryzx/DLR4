import React, { useState } from "react";
import { pizzaCart } from "./data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + (price * quantity);
    }, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <img src={item.img} alt={item.name} className="rounded" width="50" />
                <span>{item.name}</span>
                <span>${(Number(item.price) || 0).toLocaleString("es-CL")}</span> {/* Se asegura de que no sea NaN */}
                <div>
                  <button className="btn btn-sm btn-danger me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{Number(item.quantity) || 0}</span> {/* Se asegura de que no sea NaN */}
                  <button className="btn btn-sm btn-success ms-2" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="mt-3">Total: ${calculateTotal().toLocaleString("es-CL")}</h4>
          <button className="btn btn-primary mt-2 w-100">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
