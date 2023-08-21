import { Box, Paper, Stack, TextField, Button, Divider, Typography } from '@mui/material';

export default function Login(): JSX.Element {
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
        <Paper sx={{ p: 5 }} variant="outlined">
          <Box sx={{ mb: 3, textAlign: 'center' }}>PicSpot</Box>
          <Stack gap={3}>
            <TextField placeholder="Phone, nickname or email" />
            <TextField placeholder="Password" />
            <Button variant="contained">Sing in</Button>
            <Divider></Divider>
            <Typography sx={{ textAlign: 'center' }}>
              Do you forgot your password?
            </Typography>
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
          <Typography>don't you have an account? Sing up</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
