import React, { useContext } from "react";
import logo from "../images/dh-logo-header.png";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { providerValues } = useContext(ContextGlobal);
  const { dispatch} = providerValues;
  const { theme } =providerValues.state
  return (
    <div className="dark" style={{ display: "flex" }}>
      <Link to="/home">
        <img style={{ width: 50 }} src={logo} alt="DH logo" />
      </Link>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Inicio</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <button style={{alignSelf:'center'}} className="buttonTheme"
        onClick={() =>
          theme === "light"
            ? dispatch({ type: "dark" })
            : dispatch({ type: "light" })
        }
      >
        Change theme
      </button>
    </div>
  );
};

export default Navbar;
