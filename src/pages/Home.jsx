import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Typography
        component={'h1'}
        sx={{
          mt: 20,
          fontSize: 48,
          fontWeight: 'bold',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        Welcome to the phone book!
      </Typography>
      <Typography
        component={'p'}
        sx={{ mt: 4, fontSize: 24, mx: 'auto', textAlign: 'center' }}
      >
        This is a beautifully designed phonebook app that saves contacts
        securely. Register to create your collection of phone numbers.
      </Typography>
      <br />
    </div>
  );
}
