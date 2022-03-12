import { Router } from 'express';
import health from './routes/health';
import records from './routes/records';

export default () => {
  const app = Router();
  health(app);
  records(app);

  return app;
};
