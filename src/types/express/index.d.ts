import { Model } from 'mongoose';
import { IRecordSchema } from '../../models/records';

declare global {
  namespace Express {
    // export interface Request {}
  }

  namespace Models {
    export type RecordModel = Model<IRecordSchema>;
  }
}
