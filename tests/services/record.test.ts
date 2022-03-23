import RecordService from 'src/services/record';
import recordModel from 'src/models/records';
import winston from 'winston';

describe('RecordService', () => {
  const logger = winston.createLogger();

  it('should be defined', () => {
    expect(RecordService).toBeDefined();
  });

  it('should return a RecordService instance', () => {
    const recordServiceInstance = new RecordService(recordModel, logger);

    expect(recordServiceInstance).toBeInstanceOf(RecordService);
  });

  xit('should get a record', async () => {
    recordModel.create({
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      key: 'test',
      description: 'test',
      type: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const recordServiceInstance = new RecordService(recordModel, logger);
    const records = await recordServiceInstance.GetRecords({
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      maxCount: 2000,
      minCount: 1500,
    });

    expect(records).toHaveLength(1);
  });
});
