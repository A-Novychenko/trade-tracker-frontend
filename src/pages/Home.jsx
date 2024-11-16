import { Box, Typography } from '@mui/material';

import { useLang } from 'hooks';

export default function Home() {
  const { defaultLang } = useLang();
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
        {defaultLang ? 'Добро пожаловать' : 'Welcome to the Trade Tracker!'}
      </Typography>

      <Typography
        component={'p'}
        sx={{ mt: 4, fontSize: 24, mx: 'auto', textAlign: 'center' }}
      >
        Welcome to Trade Tracker Ready to maximize your trading profits? Trade
        Tracker is your dedicated platform for optimized returns on every trade.
        Dive into the power of smart tools and real-time insights tailored to
        grow your profits effectively. Start today and experience a new level of
        trading success! Let me know if you’d like to adjust the tone or add any
        specific app features!
      </Typography>
      <br />

      <Box sx={{ display: 'flex', mt: '64px' }}>
        <img
          src="https://img.freepik.com/premium-photo/business-graph-candlestick-charts-interface_670147-8475.jpg"
          alt="chart"
          style={{ margin: 'auto' }}
        />
      </Box>
    </div>
  );
}
