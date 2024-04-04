import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setToken(token);
      } else {
        console.error('Login error:', 'Token not found in response data');
      }
    } catch (error) {
      console.error('Login error:', error);

    }
  };
  
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;