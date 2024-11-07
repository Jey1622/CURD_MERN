import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      navigate('/tasks')
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
