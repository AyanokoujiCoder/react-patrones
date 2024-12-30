// Los Hooks en React son funciones que permiten a los desarrolladores usar 
// estado y otras características de React sin tener que escribir una clase. 
// Introducidos en React 16.8, los Hooks permiten crear componentes funcionales 
// más poderosos y reutilizables. Aquí hay un resumen de los principales Hooks:

// useState: Permite añadir estado a componentes funcionales.
//  Devuelve un par: el estado actual y una función para actualizarlo.

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// useEffect: Permite realizar efectos secundarios (como fetch de datos, suscripciones, etc.) 
// en componentes funcionales. Puedes especificar qué efectos ejecutar y cuándo 
// (similar a componentDidMount, componentDidUpdate y componentWillUnmount).

import React, { useEffect } from 'react';

function Example() {
    useEffect(() => {
        // Código que se ejecuta al montar el componente
        return () => {
            // Código de limpieza
        };
    }, []); // Dependencias

    return <div>Hola Mundo</div>;
}

// useContext: Permite acceder al contexto de React sin tener que usar el componente 
// <Context.Consumer>. Es útil para evitar el "prop drilling".

import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
}

// useReducer: Una alternativa a useState, útil para manejar estados más complejos. 
// Es similar a reducer en Redux.

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}

// Custom Hooks: Puedes crear tus propios Hooks para reutilizar lógica entre componentes. 
// Solo necesitas definir una función que empiece con use.

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}
