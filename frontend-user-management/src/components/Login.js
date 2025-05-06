import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRole = localStorage.getItem('role');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedRememberMe) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRole(storedRole);
      setRememberMe(storedRememberMe);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRole = localStorage.getItem('role');

    if (username === storedUsername && password === storedPassword && role === storedRole) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', true);
      if (rememberMe) {
        localStorage.setItem('rememberMe', true);
      } else {
        localStorage.removeItem('rememberMe');
      }
    } else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleLogin}>       
        <h2 className="form-signin-heading">Please login</h2>
        <input 
          type="text" 
          className="form-control" 
          name="username" 
          placeholder="Email Address" 
          required 
          autoFocus 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <label className="checkbox">
          <input 
            type="checkbox" 
            value="remember-me" 
            id="rememberMe" 
            name="rememberMe" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          /> Remember me
        </label>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>  
        <p>Don't have an account? <a href="/signup">Sign up</a></p> 
      </form>
    </div>
  );
};

export default Login;
