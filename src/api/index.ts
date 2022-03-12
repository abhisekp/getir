import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import health from './routes/health';
import agendash from './routes/agendash';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  health(app);
  auth(app);
  user(app);
  // agendash(app);

  return app;
};
