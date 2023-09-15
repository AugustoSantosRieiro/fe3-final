import React, { useContext } from "react";
import logo from "../images/logo-dh.png";
import facebook from "../images/ico-facebook.png";
import instagram from "../images/ico-instagram.png";
import tiktok from "../images/ico-tiktok.png";
import whatsapp from "../images/ico-whatsapp.png";
import { ContextGlobal } from "./utils/global.context";



const Footer = () => {
  const { providerValues} = useContext(ContextGlobal)
  const {theme} = providerValues.state
  return (
    
    <div className={theme} style={{ display: "flex", height: 150,width:'100vw', alignItems: "center",justifyContent:'center' }}>
      <h2>Powered by</h2>
      <img style={{ width: 150, height: 50 }} src={logo} alt="DigitalHouse" />
      <img className="SocialIcon" style={{ width: 20, height: 20 }} src={facebook} alt="facebook" />
      <img className="SocialIcon" style={{ width: 20, height: 20 }} src={instagram} alt="instagram" />
      <img className="SocialIcon" style={{ width: 20, height: 20 }} src={tiktok} alt="tiktok" />
      <img className="SocialIcon" style={{ width: 20, height: 20 }} src={whatsapp} alt="whatsapp" />
    </div>
  );
};

export default Footer;
