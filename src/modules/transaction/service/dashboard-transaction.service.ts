import { Injectable } from "@nestjs/common";
import { DashTransactionModel } from "../model/dashboard-transaction.response.model";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class DashboardTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(token: string): Promise<DashTransactionModel> {
    const response = await this.transactionRepository.dashboardTransaction(token);
    return response;
  }
}
