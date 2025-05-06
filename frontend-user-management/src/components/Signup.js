import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const storedUsername = localStorage.getItem('username');
    if (storedUsername === email) {
      alert('This email is already registered. Please use a different email or log in.');
      return;
    }
    localStorage.setItem('username', email);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);
    alert('Signup successful! You can now log in.');
  };

  return (
    <div className="wrapper">
      <form className="form-signup" onSubmit={handleSignup}>
        <h2 className="form-signup-heading">Create an account</h2>
       <form-control
          name="name" 
          placeholder="Full Name" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          placeholder="Email Address" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className="form-control" 
          name="password" 
          placeholder="Password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="password" 
          className="form-control" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          required 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <label>
            <input 
              type="radio" 
              name="role" 
              value="Student" 
              checked={role === 'Student'} 
              onChange={(e) => setRole(e.target.value)}
            /> Student
          </label>
          <label>
            <input 
              type="radio" 
              name="role" 
              value="Instructor" 
              checked={role === 'Instructor'} 
              onChange={(e) => setRole(e.target.value)}
            /> Instructor
          </label>
        </div>
        <button className="btn btn-lg btn-success btn-block" type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
};

export default Signup;
