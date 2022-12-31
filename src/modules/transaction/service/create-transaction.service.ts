import { Injectable } from "@nestjs/common";
import { CreateTransactionResponseModel } from "../model/create-transaction.response.model";
import { TransactionRequestModel } from "../model/transaction.request.model";
import { TransactionRepository } from "../repository/transaction.repository";

@Injectable()
export class CreateTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(payload: TransactionRequestModel, token: string): Promise<CreateTransactionResponseModel> {
    const response = await this.transactionRepository.createTransaction(payload, token);
    return response;
  }
}
