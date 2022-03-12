import { Inject, Service } from 'typedi';
import { IRecord, IRecordFilter } from '@/interfaces/IRecord';

@Service()
export default class RecordService {
  constructor(@Inject('recordModel') private recordModel: Models.RecordModel, @Inject('logger') private logger) {}

  public async GetRecords(recordFilter: IRecordFilter): Promise<IRecord[]> {
    try {
      const records = await this.recordModel.find(recordFilter || {});

      return records;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
