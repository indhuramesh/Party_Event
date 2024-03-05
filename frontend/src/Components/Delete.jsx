import { useState } from "react";
import axios from "axios"; 
import "../assets/Delete.css";
import AdminNavbar from "./AdminNavbar";
const Delete = () => {
  const [eventName, setEventName] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/auth/deleteEvents/${eventName}`);
      
      if (response.status === 200) {
        setSuccessMessage("Event deleted successfully"); 
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  return (
    <div>
      <AdminNavbar />
      <h1 className="delHead">Delete Event</h1>
      <form className="addform" onSubmit={handleDelete}>
        <label>Enter Event Name</label>
        <input
          type="text"
          id="search"
          placeholder="Enter name"
          value={eventName}
          onChange={handleEventNameChange}
        />
        <br />
        <button type="submit">DELETE</button><br></br>
        {successMessage && <p>{successMessage}</p>} 
      </form>
    </div>
  );
};

export default Delete;
