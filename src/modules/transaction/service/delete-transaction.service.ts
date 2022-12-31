import { Injectable } from "@nestjs/common";
import { DeleteTransactionResponseModel } from "../model/delete-transaction.response.model";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class DeleteTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(transactionId: number): Promise<DeleteTransactionResponseModel> {
    const response = await this.transactionRepository.deleteTransaction(transactionId);
    return response;
  }
}
