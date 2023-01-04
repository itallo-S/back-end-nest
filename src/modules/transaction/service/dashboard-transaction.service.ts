import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class DashboardTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(token: string): Promise<any> {
    const response = await this.transactionRepository.dashboardTransaction(token);
    return response;
  }
}
