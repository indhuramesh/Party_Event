import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Logo.css"
import logo from "../Images/LogoImage3.png"
const Logo = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/Landing");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  
    return (
      
      
      <div className="img-align"> 
           
        <img src={logo} alt="Logo" />    
        </div>
      
    );
  };
  
  export default Logo;
