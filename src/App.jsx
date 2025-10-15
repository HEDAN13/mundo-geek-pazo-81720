import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

// Aplicación funcional, porque esta basado en funciones

function App() {
  return (
    <>
      <Navbar />
      <Container saludo="🛒" />
    </>
  );
}

export default App;
