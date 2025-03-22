import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginComponent() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', credentials); // Debug log
        
        // Trim whitespace from credentials
        const username = credentials.username.trim();
        const password = credentials.password.trim();
        
        console.log('Comparing credentials:', {
            enteredUsername: username,
            expectedUsername: 'AraptaHildaLucky',
            enteredPassword: password,
            expectedPassword: 'arapta'
        });
        
        if (username === 'AraptaHildaLucky' && password === 'arapta') {
            console.log('Login successful'); // Debug log
            localStorage.setItem('isAuthenticated', 'true');
            // Use React Router's navigate instead of window.location
            navigate('/profile', { replace: true });
        } else {
            console.log('Login failed - Invalid credentials'); // Debug log
            setError('Invalid credentials. Please check the demo credentials below.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to View Profile</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            placeholder="Enter username"
                            autoComplete="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter password"
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                
                <div className="demo-credentials">
                    <h3>Demo Credentials</h3>
                    <p><strong>Username:</strong> AraptaHildaLucky</p>
                    <p><strong>Password:</strong> arapta</p>
                    <p className="note">These are demo credentials for testing purposes.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent; 