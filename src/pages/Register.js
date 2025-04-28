import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/register', { email, password });
      alert('Registration Successful! Please Login.');
      navigate('/login');
    } catch (error) {
      alert('Registration Failed!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={styles.form}>
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
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: { marginTop: '50px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  input: { margin: '10px', padding: '10px', width: '300px' },
  button: { padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none' }
};

export default Register;
