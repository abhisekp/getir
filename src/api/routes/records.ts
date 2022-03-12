import { Request, Response, Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import RecordService from '@/services/record';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { IRecord, IRecordFilter } from '@/interfaces/IRecord';

const route = Router();

export default (app: Router) => {
  app.use('/records', route);

  route.get(
    '/',
    celebrate({
      body: Joi.object({
        // YYYY-MM-DD
        startDate: Joi.string()
          .required()
          .pattern(/^(\d{4}-\d{2}-\d{2})$/),
        // YYYY-MM-DD
        endDate: Joi.string()
          .required()
          .pattern(/^(\d{4}-\d{2}-\d{2})$/),
        minCount: Joi.number().required(),
        maxCount: Joi.number().required(),
      }),
    }),
    async (req: Request, res: Response, next) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
      try {
        const recordServiceInstance = Container.get(RecordService);
        const records = await recordServiceInstance.GetRecords(req.body as IRecordFilter);
        return res.status(201).json({
          code: 0,
          msg: 'Success',
          records,
        });
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
