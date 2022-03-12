import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const recordModel = {
    name: 'recordModel',
    model: require('../models/records').default,
  };

  // It returns the agenda instance because it's needed in the subsequent loaders
  dependencyInjectorLoader({
    mongoConnection,
    models: [recordModel],
  });
  Logger.info('✌️ Dependency Injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
