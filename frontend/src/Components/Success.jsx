import { useNavigate } from "react-router-dom";
import "../assets/Success.css"
const BookingSuccess = () => {
  const navigate=useNavigate();
  const handleClick = ()=>{
    navigate('/Home');
  }
    return (
    <div className="booking-success">
      <h1 className="booked">Thank you for your bookings</h1>
      <img
        src="https://i.pinimg.com/originals/74/2f/7e/742f7ea29cbfd7fd3f4848f17e621070.gif"
        alt="Booked Successfully Animation"
      />
      <h1 className="booked">Booked Successfully!</h1>
      <button className="success-btn" onClick={handleClick}>Return to Home</button>
    </div>
  );
};

export default BookingSuccess;
