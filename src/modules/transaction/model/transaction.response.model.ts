export interface TransactionResponseModel {
  id: number;
  type: string;
  name: string;
  value: number;
  createAt: Date;
  updateAt: Date;
  category: string;
  description: string;
}
