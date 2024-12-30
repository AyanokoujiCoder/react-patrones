import React from 'react';

// Componente que usa Render Props
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  // Función que maneja el movimiento del mouse
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* Aquí se usa una función (Render Props) para pasar datos */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Componente principal que utiliza MouseTracker
function App() {
  return (
    <div>
      <h1>Seguimiento del mouse:</h1>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            La posición del mouse es ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}

export default App;

// MouseTracker: Es un componente que maneja el estado del mouse (x y y) y llama 
// a una función render pasada como prop para mostrar la posición del mouse.
// El componente App utiliza MouseTracker y le pasa una función como prop render 
// que define cómo mostrar los datos de la posición del mouse.

// MouseTracker: Este componente contiene el estado x y y que se actualiza cuando 
// el ratón se mueve. El método handleMouseMove actualiza las coordenadas.

// this.props.render(this.state): Aquí es donde el componente llama a la prop render 
// (pasada desde App) para mostrar lo que el usuario necesita. En este caso, la prop 
// render es una función que recibe el estado del ratón y devuelve lo que se debe 
// renderizar, en este caso, la posición del ratón.

// Componente App: El componente App pasa una función anónima como prop render, que 
// toma el estado x e y de MouseTracker y renderiza la posición del ratón en la pantalla.

// ¿Por qué usar Render Props?
// El patrón de Render Props es útil para compartir lógica de renderización entre componentes, 
// haciendo que componentes reutilizables puedan exponer diferentes salidas en función 
// de las props que se pasen, sin necesidad de duplicar código.