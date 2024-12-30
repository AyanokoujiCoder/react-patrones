// El patrón Observador (Observer) en React puede implementarse utilizando 
// useEffect y useState para escuchar cambios y actualizar componentes en 
// consecuencia. Un ejemplo simple podría ser un contador que actúa como 
// "sujeto" (observable), y otro componente que observa sus cambios.

import React, { useState, useEffect } from 'react';

// Componente Observador
const ObserverComponent = ({ count }) => {
  useEffect(() => {
    console.log(`El valor del contador ha cambiado: ${count}`);
  }, [count]); // Se ejecuta cuando el contador cambia

  return <p>El contador observado es: {count}</p>;
};

// Componente Sujeto (Observable)
const ObservableComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Patrón Observador en React</h1>
      <button onClick={handleClick}>Incrementar contador</button>
      <p>El valor actual del contador es: {count}</p>

      {/* El componente ObserverComponent está observando el valor de count */}
      <ObserverComponent count={count} />
    </div>
  );
};

export default ObservableComponent;

// ObservableComponent: Es el componente que contiene el estado count, 
// que representa el valor que queremos observar.
// ObserverComponent: Observa el estado del contador (count). Cada vez que el 
// valor cambia, se ejecuta el useEffect y muestra un mensaje en la consola.
// useEffect: Actúa como el oyente del estado, y se dispara cada vez que el valor de count cambia.