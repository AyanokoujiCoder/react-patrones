import React from 'react';

// Componente original
const SimpleComponent = ({ name, extraProp }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>{extraProp}</p>
    </div>
  );
};

// HOC que añade propiedades adicionales
const withExtraMessage = (WrappedComponent) => {
  return (props) => {
    // Añade una propiedad adicional
    const newProps = { extraProp: 'Este es un mensaje adicional desde el HOC' };

    // Retorna el componente envuelto con las nuevas propiedades
    return <WrappedComponent {...props} {...newProps} />;
  };
};

// Crear un nuevo componente envuelto por el HOC
const EnhancedComponent = withExtraMessage(SimpleComponent);

const App = () => {
  return (
    <div>
      <EnhancedComponent name="Juan" />
    </div>
  );
};

export default App;

// Explicación:
// withExtraMessage es el HOC que envuelve al componente original (SimpleComponent). Este HOC le añade una propiedad adicional (extraProp).
// SimpleComponent es el componente que simplemente recibe y muestra las props.
// EnhancedComponent es el nuevo componente creado a partir del HOC, que tiene las propiedades originales más las adicionales (extraProp).
// HOC permite reutilizar lógica y envolver cualquier componente que necesite la misma funcionalidad sin repetir el código.

// Usos comunes de HOCs:
// Autenticación: Envolver componentes para verificar si el usuario está autenticado antes de renderizarlos.
// Control de permisos: Filtrar qué componentes o contenido puede ver un usuario.
// Manejo de datos: HOCs pueden encargarse de obtener datos (fetch) y pasarlos a componentes presentacionales.
// Optimización de rendimiento: Como la implementación de memoization o caching en componentes.

// Ventajas:
// Reutilización de lógica sin modificar los componentes originales.
// Separa la lógica de los componentes y la presentación.
// Facilita la composición de componentes más complejos y modulares.

// Desventajas:
// Puede dificultar el seguimiento del flujo de datos cuando se utilizan muchos HOCs.
// Si no se manejan correctamente, pueden complicar la estructura del código con demasiadas capas de componentes envueltos.