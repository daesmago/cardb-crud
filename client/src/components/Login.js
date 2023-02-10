import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Carlist from './Carlist';
import Snackbar from '@mui/material/Snackbar';
import { SERVER_URL } from '../constants.js';

function Login() {
  const [user, setUser] = useState({
    username: '', 
    password: ''
  });
  const [isAuthenticated, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleChange = (event) => {
    setUser({...user, [event.target.name] : event.target.value});
  }
  
  const login = () => {
    fetch(SERVER_URL + 'login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      const jwtToken = res.headers.get('Authorization');
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
      else {
        setOpen(true);
      }
    })
    .catch(err => console.error(err))
  }

  if (isAuthenticated) {
    return <Carlist />;
  }
  else {

    // Actual login
    return(
      <div>
        <Stack spacing={2} alignItems='center' mt={10} >
          <TextField 
            name="username"
            label="Usuario"
            onChange={handleChange} />
          <TextField 
            type="password"
            name="password"
            label="Contraseña"
            onChange={handleChange}/>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={login}>
              Ingresar
          </Button>
        </Stack>
        <Snackbar 
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Falló inicio de sesión: Por favor ingresa las credenciales correctas"
        />
      </div>
    );
  }
}

export default Login;
