import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../assets/CustomerSignin.css";
const CustomerSignin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleMail = (event) => {
    setEmail(event.target.value);
  };
  const handlePwd = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate({ name, email, password });
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
          name,
          email,
          password,
        });
        console.log("Registration successful:", response.data);
        const tokenResponse = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
          email,
          password,
        });
        const { token, id } = tokenResponse.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(id));
        console.log("Token generated and stored in local storage");
        navigate("/CustomerSignin");
      } catch (error) {
        console.error("Error registering:", error.response.data.error);
      }
    } else {
      setFormErrors(errors);
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (values.email.length < 5) {
      errors.email = "Email invalid format";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  return (
    <div className="signup-container">
      <div className="signup-image"></div>
      <div className="signup-form">
        <div id="log-box-main">
          <form className="emp-box" onSubmit={handleSubmit}>
            <h1 className="ask">Sign Up</h1>
            <br></br>
            <TextField
              onChange={handleName}
              value={name}
              className="inp"
              type="text"
              label="Name"
            />
            <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
              {formErrors.name}
            </p>
            <br></br>
            <TextField
              onChange={handleMail}
              value={email}
              className="inp"
              label="Email"
            />
            <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
              {formErrors.email}
            </p>
            <br></br>
            <TextField
              onChange={handlePwd}
              value={password}
              className="inp"
              type="password"
              label="Password"
            />
            <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
              {formErrors.password}
            </p>
            <br></br>
            <p>
              Already have an account?<Link to="/CustomerSignin">here</Link>
            </p>
            <br></br>
            <Button type="submit" id="login-button" variant="contained">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CustomerSignin;
