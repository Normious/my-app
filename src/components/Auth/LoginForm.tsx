import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { logIn, googleSignIn } from '../../services/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      setError('Login failed: ' + (error instanceof Error ? error.message : 'Unknown error occurred'));
    }
  };

  return (
    <section id="login">
    <div className="section-wrap">
      <h3 className="section-title"><span>Log </span>In</h3>
          {error && <div className="error-message">{error}</div>}
          <div className="auth-form">
      {currentUser ? (
        <button onClick={() => navigate('/')} className="section-btn">
          Go to Home
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="section-btn">
            Login
          </button>
          <button
            type="button"
            className="section-btn"
            onClick={() => navigate('/register')}
          >
            Register here
          </button>
          <button
            type="button"
            className="header-cta-btn"
            onClick={googleSignIn}
          >
            Sign in with Google
          </button>
        </form>
      )}
    </div>
    </div>
  </section>

  );
};

export default LoginForm;