export interface TransactionResponsePostgresDTO {
  id: number;
  type: string;
  name: string;
  value: number;
  userId: number;
  updateAt: Date;
  createAt: Date;
  category: string;
  description: string;
}
