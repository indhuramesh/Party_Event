import "../assets/Booking.css"
import '@fortawesome/fontawesome-free/css/all.css';
import AdminNavbar from "../Components/AdminNavbar"
import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

   // user.js

const fetchUsers = async () => {
  try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/getUsers');
      setUser(response.data);
  } catch (error) {
      console.error('Error fetching user:', error);
  }
};




    return (
        <div>
            <AdminNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        
                                        
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

export default UserDetails;
