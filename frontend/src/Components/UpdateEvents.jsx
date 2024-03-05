
import { useState } from "react";
import axios from "axios";
import "../assets/AddEvents.css";
import AdminNavbar from "./AdminNavbar";

const AddEvents = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State variable for success message

  const handleUpdate = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/auth/updateEvents/${eventName}`, {
        eventName,
        description,
        imageUrl,
      });

      if (response.status === 200) {
        setSuccessMessage("Event updated successfully"); // Set success message
        // Optionally, you can redirect the user or perform other actions after successful update
      } else {
        console.error("Failed to update event");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <form className="event-booking-form" onSubmit={handleUpdate}>
        <h2>Update Events</h2>

        <label htmlFor="eventName">Event Name:</label>
        <input type="text" id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />

        <label htmlFor="message">Description</label>
        <textarea id="message" name="message" value={description} onChange={(e) => setDescription(e.target.value)} rows="4"></textarea>

        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />

        <button type="submit">Update Event</button><br></br>

        {successMessage && <p>{successMessage}</p>} {/* Render success message if set */}
      </form>
    </div>
  );
};

export default AddEvents;
