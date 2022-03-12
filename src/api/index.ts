import { Router } from 'express';
import health from './routes/health';

export default () => {
  const app = Router();
  health(app);

  return app;
};
