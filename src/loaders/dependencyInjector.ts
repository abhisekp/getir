import { Container } from 'typedi';
import LoggerInstance from './logger';
import { Db } from 'mongodb';

export default ({
  mongoConnection,
  models,
}: {
  mongoConnection: Db;
  models: { name: string; model: never[] }[];
}): void | never => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    // Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
