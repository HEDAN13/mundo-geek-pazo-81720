import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useState } from "react";

// Aplicación funcional, porque esta basado en funciones
// Cuando se renderiza el padre, también se renderizan los hijos

function App() {
  console.log("Componente App montado");
  const [nombre, setNombre] = useState("Pablo");

  return (
    <>
      {/* <Navbar />
      <Container saludo="Hola Mundo Geek!" dia={21} /> */}

      <Container handleChangeName={() => setNombre("Pedro")} />
      <p>Mi nombre es: {nombre}</p>
    </>
  );
}

export default App;
