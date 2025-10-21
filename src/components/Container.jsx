import { useState } from "react";

function Container({ handleChangeName }) {
  console.log("Componente Container montado");

  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    console.log("Botón clickeado");
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>Contador: {counter}</p>
      <button onClick={handleIncrementCounter}>Incrementar</button>
      <button onClick={handleChangeName}>Cambiar nombre</button>
    </div>
  );
}

export default Container;
