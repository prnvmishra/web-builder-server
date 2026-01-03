import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Minimal server working!' });
});

export default app;
