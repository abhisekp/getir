import { Request, Response, Router } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/health', route);

  route.get('/', (req: Request, res: Response) => {
    return res.json({ status: 'OK' }).status(200);
  });
};
