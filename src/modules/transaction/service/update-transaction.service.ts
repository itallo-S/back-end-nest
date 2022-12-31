import { Injectable } from "@nestjs/common";
import { TransactionRequestModel } from "../model/transaction.request.model";
import { UpdateTransactionResponseModel } from "../model/update-transaction.response.model";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class UpdateTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(payload: TransactionRequestModel, transactionId: number): Promise<UpdateTransactionResponseModel> {
    const response = await this.transactionRepository.updateTransaction(payload, transactionId);
    return response;
  }
}
