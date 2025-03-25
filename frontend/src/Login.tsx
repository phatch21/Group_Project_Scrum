import React, { useState } from "react";
import "./styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="login-screen">
      <div className="status-bar">
        <div>9:41</div>
        <div>📶 🔋</div>
      </div>

      <form className="login-content" onSubmit={handleSubmit}>
        <h1 className="login-title">Thryve Login</h1>

        <label className="login-label" htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          className="login-input"
          value={formData.username}
          onChange={handleChange}
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="login-button" type="submit">Login</button>

        <div className="login-links">
          <p>
            Forgot <a href="#">Password</a>?
          </p>
          <p>
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </form>

      <div className="login-footer">
        <img src="/TreeLogo.png" alt="Tree logo" />
      </div>
    </div>
  );
};

export default Login;
