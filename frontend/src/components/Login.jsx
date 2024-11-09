import React, { useState } from "react";
import "../assets/login.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons" draggable="false">
            <a href="#" className="icon" draggable="false">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon" draggable="false">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons" draggable="false">
            <a href="#" className="icon" draggable="false">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon" draggable="false">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <p className="forgetPassword">
            <a href="#">Forget Your Password?</a>
          </p>
          <button type="button">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello!</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button id="register" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
