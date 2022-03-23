import { IRecord } from '../interfaces/IRecord';
import mongoose from 'mongoose';

export interface IRecordSchema extends Omit<IRecord, '_id'>, mongoose.Document {}

const Record = new mongoose.Schema<IRecordSchema>(
  {
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number],
  },
  { timestamps: false },
);

export default mongoose.model<IRecordSchema>('Record', Record, 'records');
