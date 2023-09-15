import React, { useContext } from "react";
import logo from "../images/logo-dh.png";
import { ContextGlobal } from "./utils/global.context";



const Footer = () => {
  const { providerValues} = useContext(ContextGlobal)
  const {theme} = providerValues.state
  return (
    
    <div className={theme} style={{ display: "flex", height: 150,width:'100vw', alignItems: "center",justifyContent:'center' }}>
      <h2>Powered by</h2>
      <img style={{ width: 150, height: 50 }} src={logo} alt="ConDev" />
    </div>
  );
};

export default Footer;
