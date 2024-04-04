import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { name, dob, email, password });
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>

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

export default Registration;