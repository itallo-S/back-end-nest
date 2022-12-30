export interface CreateTransactionRequestPostgresDTO {
  type: string;
  name: string;
  value: number;
  category: string;
  description: string;
}
