import { Inject, Service } from 'typedi';
import { IRecord, IRecordFilter } from '@/interfaces/IRecord';
import addDays from 'date-fns/addDays';

@Service()
export default class RecordService {
  constructor(@Inject('recordModel') private recordModel: Models.RecordModel, @Inject('logger') private logger) {}

  public async GetRecords(recordFilter: IRecordFilter): Promise<IRecord[]> {
    try {
      const endDate = addDays(new Date(recordFilter.endDate), 1);

      const pipeline = [
        {
          $project: {
            _id: 0.0,
            key: 1.0,
            createdAt: 1.0,
            totalCounts: {
              $sum: '$counts',
            },
          },
        },
        {
          $match: {
            totalCounts: {
              $gte: recordFilter.minCount,
              $lte: recordFilter.maxCount,
            },
            createdAt: {
              $gte: new Date(recordFilter.startDate),
              $lte: endDate,
            },
          },
        },
      ];

      const records = await this.recordModel.aggregate(pipeline);

      return records;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
