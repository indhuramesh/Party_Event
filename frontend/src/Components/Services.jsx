import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserNavbar from '../Components/UserNavbar';
const Booking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/v1/auth/getEvents', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError('Please login or sign up to access this feature.');
        } else {
          setError(error.message);
        }
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <UserNavbar />
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
        <p className="auth-error">{error}</p>
      ) : (
        <div className="event-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="event-item">
                <img src={event.imageUrl} alt={event.eventName} className="event-image" />
                <div className="display">
                  <h2>{event.eventName}</h2>
                  <p>{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="not-found">No events found.</p>
          )}
        </div>
      )}
      <br />
      <Link to="/Form" className="book-now-button">Book Events</Link>
    </>
  );
};

export default Booking;
