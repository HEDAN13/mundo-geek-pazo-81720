import { useState } from "react";
import "./App.css";

// Aplicación funcional, porque esta basado en funciones

function App() {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("Pablo");

  console.log("counter:", counter);

  return (
    <div>
      <p>Contador: {counter}</p>
      <p>Nombre: {nombre}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <button
        onClick={() => {
          counter % 2 == 0 ? setNombre("Rodolfo") : setNombre("Pablo");
        }}
      >
        Cambiar nombre
      </button>
    </div>
  );
}

export default App;
