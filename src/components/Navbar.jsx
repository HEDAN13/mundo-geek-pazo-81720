import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <li>Categorias</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
