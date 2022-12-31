import { Injectable } from "@nestjs/common";
import { TransactionResponseModel } from "../model/transaction.response.model";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class ListTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(token: string): Promise<TransactionResponseModel[]> {
    const response = await this.transactionRepository.listTransaction(token);
    return response;
  }
}
