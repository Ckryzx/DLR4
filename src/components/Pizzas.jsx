import React, { useEffect, useState } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas/p001") // ID fijo por ahora
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar la pizza.");
                }
                return response.json();
            })
            .then((data) => setPizza(data))
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return <p className="alert alert-danger">{error}</p>;
    }

    if (!pizza) {
        return <p>Cargando pizza...</p>;
    }

    return (
        <div className="container mt-4">
            <h1>{pizza.name}</h1>
            <img src={pizza.img} alt={pizza.name} className="img-fluid" />
            <p>{pizza.desc}</p>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p><strong>Precio: ${pizza.price}</strong></p>
            <button className="btn btn-success">Añadir al carrito</button>
        </div>
    );
};

export default Pizza;