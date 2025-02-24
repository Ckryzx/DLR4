import React, { useEffect, useState } from "react";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar las pizzas.");
                }
                return response.json();
            })
            .then((data) => setPizzas(data))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div className="container mt-4">
            <h1>🍕 Nuestras Pizzas</h1>

            {error ? (
                <p className="alert alert-danger">{error}</p>
            ) : (
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="col-md-4 mb-3">
                            <div className="card">
                                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pizza.name}</h5>
                                    <p className="card-text">{pizza.desc}</p>
                                    <ul>
                                        {pizza.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p><strong>Precio: ${pizza.price}</strong></p>
                                    <button className="btn btn-primary">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
