// src/components/LandingPage.jsx
import "../assets/Landing.css"
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate();

  const handleAdminClick = () => {
    // Navigate to the admin signin page
    navigate('/AdminSignin');
  };
  const handleUserClick = () =>{
    navigate('/CustomerSignin')
  }
  return (
    <div className="landing-page">
      <h1 className="landHead">Feista Fleet</h1>
      <div className="button-container">
        <button className="admin-button" onClick={handleAdminClick}>
          <img src="https://cdn-icons-png.flaticon.com/128/8099/8099237.png" alt="Admin" />
          Admin
        </button>
        <button className="user-button" onClick={handleUserClick}>
          <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="User" />
          User
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
