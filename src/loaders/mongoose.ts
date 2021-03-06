import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';
import toJson from '@meanie/mongoose-to-json';

mongoose.plugin(toJson);

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURL);
  return connection.connection.db;
};
