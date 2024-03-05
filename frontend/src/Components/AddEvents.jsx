
import "../assets/AddEvents.css";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";

const AddEvents = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State variable for success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/addEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          description,
          imageUrl,
        }),
      });

      if (response.ok) {
        // Event added successfully, update success message
        setSuccessMessage("Event added successfully");
        // Clear form fields
        setEventName("");
        setDescription("");
        setImageUrl("");
      } else {
        // Handle error response from server
        console.error("Failed to add event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <form className="add-event-booking-form" onSubmit={handleSubmit}>
        <h2>Adding Events</h2>

        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button type="submit">Add Event</button>
        {successMessage && <p>{successMessage}</p>} 
      </form>
    </div>
  );
};

export default AddEvents;