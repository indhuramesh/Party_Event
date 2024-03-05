import { NavLink } from "react-router-dom";
import "../assets/Admin.css"
import  { useState } from "react";

import logo from "../Images/LogoImage3.png"
const AdminNavbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div><nav className="admin-navbar">
    <div className="admin-nav-container">
      <NavLink exact to="/Read" className="admin-nav-logo">
        <img src={logo} alt="Logo" className="admin-img" />
      </NavLink>

      <ul className={click ? "admin-nav-menu active" : "admin-nav-menu"}>
      <li className="admin-nav-item">
        <NavLink
                exact
                to="/ViewEvents"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
               Event Type
              </NavLink>
              </li>
<li className="admin-nav-item">
        <NavLink
                exact
                to="/ViewBookings"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
               Bookings
              </NavLink>
              </li>
              <li className="admin-nav-item">
        <NavLink
                exact
                to="/AddEvents"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
               Add Events
              </NavLink>
              </li>
              <li className="admin-nav-item">
        <NavLink
                exact
                to="/UpdateEvents"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
               Update Events
              </NavLink>
              </li>
              <li className="admin-nav-item">
        <NavLink
                exact
                to="/Delete"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
              Delete Events
              </NavLink>
              </li>
              <li className="admin-nav-item">
        <NavLink
                exact
                to="/User"
                activeClassName="active"
                className="admin-nav-links"
                onClick={handleClick}
              >
              Registered Users
              </NavLink>
              </li>
       
      </ul>
    </div>
  </nav></div>
  )
}

export default AdminNavbar