import { useState , useEffect} from 'react';
import "../assets/Services.css";
import axios from "axios"
import AdminNavbar from "../Components/AdminNavbar"

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/getEvents');
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AdminNavbar />
      <div className="servicehead">
        <h1 className="servicepara">FIESTA FLEET</h1>
        <p className="servicepara">PRESENTS</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="event-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="event-item">
                <img src={event.imageUrl} alt={event.eventName} className="event-image" />
                <div className="display">
                  <h2>Event ID : {event.eventId}</h2>
                  <h3>{event.eventName}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      )}
      <br />
    </>
  );
};


export default EventList;

