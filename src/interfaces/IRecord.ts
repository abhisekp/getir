export interface IRecord {
  _id: string;
  key: string;
  value: string;
  createdAt: Date;
  counts: number[];
}
