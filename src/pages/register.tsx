import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function TextFieldPassword({
  value,
  onChange,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <TextField
      id="Password"
      name="password"
      placeholder="super_secrete_password"
      label="Password"
      value={value}
      type={isVisible ? 'text' : 'password'}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" disableRipple onClick={toggleVisibility}>
              {isVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      // onChange={};
    />
  );
}

export default function Register(): JSX.Element {
  type NewUserData = {
    email: string;
    // fullname: string;
    username: string;
    password: string;
  };
  const [newUserData, setNewUserData] = useState<NewUserData>({
    email: '',
    // fullname: '',
    username: '',
    password: '',
  });

  function handleDataChange(evt: React.FormEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value;
    const name = evt.currentTarget.name;
    console.log({ value: evt.currentTarget.value, name: evt.currentTarget.name });
    setNewUserData({ ...newUserData, [name]: value });
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 5, mb: 2 }} variant="outlined">
          <Box sx={{ mb: 3, py: 5, textAlign: 'center' }}>
            <img src="\logo_striped.png" height={'50px'} />
          </Box>

          <Stack gap={2}>
            <Typography variant="body1" color="initial"></Typography>
            <TextField
              id="email"
              label="Email"
              value={newUserData.email}
              //   onChange={() => {}}
              placeholder="example@gmail.com"
            />
            <TextField
              id="username"
              label="Username"
              placeholder="awesome_username"
              value={newUserData.username}
              //   onChange={}
            />
            <TextFieldPassword value={newUserData.password} onChange={handleDataChange} />

            <Typography variant="body1" color="initial" textAlign={'center'}>
              By signing up, you agree to our
              <Link to={'/terms'}>Terms</Link>,{' '}
              <Link to={'/prvacity-policy'}>Privacy Policy</Link> and{' '}
              <Link to={'/cookies'}>Cookies Policy</Link>.
            </Typography>

            <Button variant="contained" color="primary" disableRipple disableElevation>
              Sing up
            </Button>
          </Stack>
        </Paper>
        <Paper sx={{ px: 5, py: 3 }} variant="outlined">
          <Typography variant="body1" color="initial" textAlign={'center'}>
            Have an account? <Link to={'/login'}>Sing in</Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
