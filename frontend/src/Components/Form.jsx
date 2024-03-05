import '../assets/Form.css';
import { useState, useEffect } from 'react';
import UserNavbar from "../Components/UserNavbar"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const EventBookingForm = () => {
    const [bookingStatus, setBookingStatus] = useState(null);
    const [country, setCountry] = useState('');
    const [eventName, setEventName] = useState('');
    const [food, setFood] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/Home');
    };
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };
    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const token = localStorage.getItem('token'); 
            const response = await axios.post("http://localhost:8080/api/v1/auth/addBookings", {
                fullName: event.target.fullName.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                country,
                eventName,
                location: event.target.location.value,
                date: event.target.date.value,
                time: event.target.time.value,
                theme: event.target.theme.value,
                guests: event.target.guests.value,
                food,
                message: event.target.message.value
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Add the token to the Authorization header
                }
            });
            console.log("Booking successful:", response.data);
            setBookingStatus('success');
        } catch (error) {
            console.error("Error booking:", error.response.data.error);
            setErrorMessage(error.response.data.error);
        }
    };
    useEffect(() => {
        if (bookingStatus === 'success') {
            setTimeout(() => {
                navigate('/Booking');
            }, 100);
        }
    }, [bookingStatus, navigate]);
    return (
        <>
        <UserNavbar/>
        <div className="formstar">
            <div className="formbody">
                <form className="event-booking-form" onSubmit={handleFormSubmit}>
                    <h2>Event Booking</h2>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required />
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country" value={country} onChange={handleCountryChange} required />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <label htmlFor="eventName">Event Name:</label>
                    <select id="eventName" name="eventName" value={eventName} onChange={handleEventNameChange} required>
                        <option value="" disabled>Select an Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="wedding">Wedding Celebration</option>
                        <option value="anniversary">Anniversary Party</option>
                        <option value="babyshower">Baby Shower</option>
                        <option value="corporate">Corporate Events</option>
                    </select>
                    <label htmlFor="location">Event Location:</label>
                    <input type="text" id="location" name="location" required />
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" name="date" required />
                    <label htmlFor="time">Event Time:</label>
                    <input type="time" id="time" name="time" required />
                    <label htmlFor="theme">Theme Colour:</label>
                    <input type="text" id="theme" name="theme" required />
                    <label htmlFor="guests">Number of Guests:</label>
                    <input type="number" id="guests" name="guests" required />
                    <label htmlFor="food">Food Preference:</label>
                    <select id="food" name="food" value={food} onChange={handleFoodChange} required>
                        <option value="" disabled>Select Food Preference</option>
                        <option value="Non-veg">Non-Veg</option>
                        <option value="Pure-veg">Pure Veg</option>
                        <option value="Both">Both</option>
                    </select>
                    <label htmlFor="message">Special requests/Preferences:</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                    <button type="submit">Book Now</button>
                    <button className="success-btn" onClick={handleBackClick}>Return to Home</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default EventBookingForm;
