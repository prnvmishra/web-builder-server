import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.TRUSTED_ORIGINS?.split(',') || [],
    credentials: true,
}

app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Server with CORS working!',
    env: {
      DATABASE_URL: process.env.DATABASE_URL ? 'SET' : 'NOT SET',
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? 'SET' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV
    }
  });
});

// For local development
if (!process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

// For Vercel deployment
export default app;