import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { signUp, googleSignIn } from '../../services/auth';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { currentUser } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    await signUp(email, password);
    navigate('/');
    } catch (error) {
      setError('Failed to create account: ' + (error instanceof Error ? error.message : 'Unknown error occurred'));
    }
  };

  return (
    <section id="register">
      <div className="section-wrap">
        <h3 className="section-title"><span>Create </span>Account</h3>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="section-btn">
            Register
          </button>
          <button
            type="button"
            className="section-btn"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
          <button
            type="button"
            className="section-btn"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;