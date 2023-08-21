import { Grid, Box, Divider } from '@mui/material';

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: 'flex' }}>
        <Box>
          Here goes the sidebar
          <Box>Logo</Box>
          <Box>Home</Box>
          <Box>Search</Box>
          <Box>Explore</Box>
          <Box>Messages</Box>
          <Box>Notification</Box>
          <Box>Create</Box>
          <Box>Profile</Box>
          <Box>Mores</Box>
        </Box>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex' }}>
        here goes the main section
        <Box>post 1</Box>
        <Box>post 2</Box>
        <Box>post 3</Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          Here goes the right sidebar
          <Box>friends suggestions 1 2 3 4 5</Box>
        </Box>
      </Grid>
    </Grid>
  );
}
