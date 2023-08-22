import {
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Divider,
  Typography,
  Link,
} from '@mui/material';

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
          maxWidth: '500',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 5, mb: 2 }} variant="outlined">
          <Box sx={{ mb: 3, textAlign: 'center' }}>PicSpot</Box>
          <Stack gap={2}>
            <TextField placeholder="Phone, nickname or email" />
            <TextField placeholder="Password" />
            <Button variant="contained" disableRipple>
              Sing in
            </Button>
          </Stack>
          <Divider sx={{ mt: 3, mb: 3 }}></Divider>
          <Typography sx={{ textAlign: 'center' }}>
            <Link href="/recover" sx={{ textDecoration: 'none' }}>
              Do you forgot your password?
            </Link>
          </Typography>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
          <Typography>
            don't you have an account?{' '}
            <Link href="/singup" sx={{ textDecoration: 'none' }}>
              Sing up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
