import { useState } from 'react';
import { Box, Paper, Typography, Stack, TextField } from '@mui/material';

export default function Register(): JSX.Element {
  const [newUserData, setNewUserData] = useState<NewUserData>({
    email: '',
    fullname: '',
    username: '',
    password: '',
  });
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
          maxWidth: '500',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 5, mb: 2 }} variant="outlined">
          <Box sx={{ mb: 3, py: 5, textAlign: 'center' }}>
            <img src="/logo_striped.png" height={'50px'} />
          </Box>

          <Stack>
            <Typography variant="body1" color="initial"></Typography>
            <TextField
              id="email"
              label="email-input"
              value={newUserData.email}
              //   onChange={() => {}}
              placeholder="Email"
            />
            <TextField
              id="fullname"
              placeholder="fullname"
              label=""
              value={newUserData.fullname}
              //   onChange={}
            />
            <TextField
              id="username"
              placeholder="username"
              label=""
              value={newUserData.username}
              //   onChange={}
            />
            <TextField
              id="Password"
              placeholder="password"
              label=""
              value={newUserData.password}
              //   onChange={}
            />
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
