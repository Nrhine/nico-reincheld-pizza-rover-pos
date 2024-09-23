import './LoginPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const PORT = import.meta.env.VITE_SERVER_PORT;
  const baseUrl = `http://${host}:${PORT}`;

  const loginUrl = `${baseUrl}/login`;

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(loginUrl, {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      console.log(response.data);
      // Store the JWT
      sessionStorage.setItem('JWTtoken', response.data.token);

      navigate('/directory');
    } catch (error) {
      console.error(error);
      setError(
        `${error.response?.data?.error?.message || 'Login failed'}. Try again`
      );
    }
  };

  return (
    <main>
      <section className="login">
        <form onSubmit={handleLogin} className="login__form">
          <h1 className="login__form-header">The Pizza Rover</h1>
          <label htmlFor="username" className="login__form-label">
            Username
            <input
              className="login__form-input"
              type="text"
              name="username"
              id="username"
              required
            />
          </label>
          <label htmlFor="password" className="login__form-label">
            Password
            <input
              className="login__form-input"
              type="password"
              name="password"
              id="password"
              required
            />
          </label>
          <button className="login__form-button" type="submit">
            login
          </button>
          {error && <p className="login__form-error">{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
