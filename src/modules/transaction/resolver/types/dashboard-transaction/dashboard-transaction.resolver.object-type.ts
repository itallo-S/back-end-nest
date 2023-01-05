interface Transaction {
  name: string;
  value: number;
  category: string;
  createAt: string;
}
export interface DashTransactionResolverObjectType {
  OUTPUT: Transaction[];
  INPUT: Transaction[];
}
