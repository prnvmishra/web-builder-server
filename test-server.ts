import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Server is working!',
    env: {
      DATABASE_URL: process.env.DATABASE_URL ? 'SET' : 'NOT SET',
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? 'SET' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV
    }
  });
});

export default app;
