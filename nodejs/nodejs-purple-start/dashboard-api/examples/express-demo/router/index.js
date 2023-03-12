import express from 'express';

const router = express.Router();

router.post('/login', (res, res) => {
  res.send('login');
});

export { router };