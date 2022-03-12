export interface IRecord {
  _id: string;
  key: string;
  value: string;
  createdAt: Date;
  counts: number[];
}

export interface IRecordFilter {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  minCount: number;
  maxCount: number;
}
