import React, { useEffect, useState } from 'react';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);
  let pizzas2 = [pizzas]

  return (
    <div>
      <h1>Lista de Pizzas</h1>
      {  }
      <div>
        {pizzas2.map((pizza, index) => (
          <ul  key={index}>
          <li>nombre: {pizza.name}</li>
          <li>Precio: {pizza.price}</li>
          <li>Descripcion: {pizza.desc}</li>
          <li><img src={pizza.img}></img></li>
          </ul>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
