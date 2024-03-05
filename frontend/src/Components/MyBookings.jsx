import "../assets/Booking.css"
import '@fortawesome/fontawesome-free/css/all.css';
import UserNavbar from '../Components/UserNavbar';
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from 'axios';
const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetchBookings();
    }, []);
    const handleEditBooking = async () => {
        navigate(`/updateBooking`);
    };
    const handleDeleteBooking = async (fullName) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/auth/deleteBookings/${fullName}`);
            fetchBookings(); 
            console.log('Booking deleted successfully');
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
      };
const fetchBookings = async () => {
  try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/getBookings');
      setBookings(response.data);
  } catch (error) {
      console.error('Error fetching bookings:', error);
  }
};
    return (
        <div>
            <UserNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Booking Id</th>
                                    <th scope="col">Client</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Theme</th>
                                    <th scope="col">Guests</th>
                                    <th scope="col">Food</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr key={index}>
                                        <td>{booking.bookingId}</td>
                                        <td>{booking.fullName}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.phone}</td>
                                        <td>{booking.country}</td>
                                        <td>{booking.eventName}</td>
                                        <td>{booking.location}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.time}</td>
                                        <td>{booking.theme}</td>
                                        <td>{booking.guests}</td>
                                        <td>{booking.food}</td>
                                        <td>{booking.message}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-success"
                                                    onClick={() => handleEditBooking(booking)}
                                                >
                                                    <i className="fas fa-edit" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteBooking(booking.fullName)}
                                                >
                                                <i className="far fa-trash-alt" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
