// Un HOC (Higher-Order Component) en React es una técnica avanzada para reutilizar 
// la lógica entre componentes. Básicamente, un HOC es una función que toma un componente 
// como argumento y devuelve un nuevo componente con funcionalidad adicional. 
// Es una forma de composición de componentes en lugar de herencia, lo que permite 
// compartir comportamiento sin modificar los componentes originales.

const withExtraProps = (WrappedComponent) => {
    return (props) => {
      // Lógica adicional o propiedades extra
      const newProps = { extraProp: 'Este es un valor adicional' };
  
      // Retorna el componente original con las nuevas propiedades
      return <WrappedComponent {...props} {...newProps} />;
    };
  };
  