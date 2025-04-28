import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login Successful!');
      navigate('/');
    } catch (error) {
      alert('Login Failed!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { marginTop: '50px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  input: { margin: '10px', padding: '10px', width: '300px' },
  button: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none' }
};

export default Login;

  