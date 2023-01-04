export interface DashboardTransactionResponseModel {
  input: {
    transactions: Transaction[];
    highestCategory: any;
    highestValue: any;
    countItems: number;
    totalValue: number;
  }

  output: {
    transactions: Transaction[];
    highestCategory: any;
    highestValue: any;
    countItems: number;
    totalValue: number;
  }
}

export interface sample {
  value: number;
  category: string;
  createAt: string;
}

export interface Transaction  {
  name: string;
  type: string;
  value: number;
  category: string;
  createAt: string;
}
