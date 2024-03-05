
import UserNavbar from "./UserNavbar";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateBooking = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState("");
  const [guests, setGuests] = useState("");
  const [food, setFood] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  useEffect(() => {
    // Fetch token from localStorage or wherever you store it
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.put(
          `http://localhost:8080/api/v1/auth/updateBookings/${fullName}`,
          {
            email,
            phone,
            country,
            eventName,
            location,
            date,
            time,
            theme,
            guests,
            food,
            message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          setUpdateStatus("Booking updated successfully");
          // Optionally, you can redirect the user or perform other actions after successful update
        } else {
          console.error("Failed to update booking");
          setUpdateStatus("Failed to update booking");
        }
      } catch (error) {
        console.error("Error updating booking:", error);
        setUpdateStatus("Error updating booking");
      }
  };

  return (
    <div>
      <UserNavbar />
      <form className="event-booking-form" onSubmit={handleUpdate}>
        <h2>Update Booking</h2>

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        {/* Rest of your form inputs */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} required />

        <label htmlFor="eventName">Event Name:</label>
<select id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required>
  <option value="">Select an Event</option>
  <option value="Birthday">Birthday Party</option>
  <option value="Wedding">Wedding Celebration</option>
  <option value="Anniversary">Anniversary Party</option>
  <option value="Baby Shower">Baby Shower</option>
  <option value="Corporate">Corporate Events</option>
</select>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <label htmlFor="theme">Theme:</label>
        <input type="text" id="theme" name="theme" value={theme} onChange={(e) => setTheme(e.target.value)} required />

        <label htmlFor="guests">Guests:</label>
        <input type="number" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

        <label htmlFor="food">Food:</label>
<select id="food" name="food" value={food} onChange={(e) => setFood(e.target.value)} required>
  <option value="">Select Food Preference</option>
  <option value="Non-veg">Non-Veg</option>
  <option value="Pure-veg">Pure Veg</option>
  <option value="Both">Both</option>
</select>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4"></textarea>


        <button type="submit">Update Booking</button>
      {updateStatus && <p>{updateStatus}</p>}
      </form>
    </div>
  );
};

export default UpdateBooking;
