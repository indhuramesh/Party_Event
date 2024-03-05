import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/CustomerSignin.css";

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null); // State to handle login error
  const navigate = useNavigate();

  const handleMail = (event) => {
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate({ email, password }));
    const isValid = Object.keys(formErrors).length === 0;
    setIsSubmit(isValid);

    if (isValid) {
      if (email === "indhu@gmail.com" && password === "Indhu@123") {
        try {
          const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
            email,
            password,
          });
          const { token } = response.data;
          localStorage.setItem('token', token);
          console.log("Login successful:", response.data);
          navigate("/Admin"); // Redirect to Admin page after successful login
        } catch (error) {
          console.error("Error logging in:", error.response.data.error);
        }
      } else {
        setLoginError("Invalid admin access");
      }
    }
  };

  const validate = (values) => {
    const errors = {};

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
            <h1 className="ask">Sign In</h1>
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

            {loginError && ( // Display login error if exists
              <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
                {loginError}
              </p>
            )}

            <p>
              Don't have an account?<Link to="/CustomerSignup">here</Link>
            </p>

            <br></br>
            <Button type="submit" id="login-button" variant="contained">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
