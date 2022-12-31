import { Injectable } from "@nestjs/common";
import { messagePtBr } from "src/core/localized/message.pt-br";
import { ListTransactionResponseToModelMapper } from "../datasource/transaction-postgres-client/mapper/list-transaction-response-to-model.mapper";
import { TransactionPostgresDbClient } from "../datasource/transaction-postgres-client/transaction.postgres.db-client";
import { CreateTransactionResponseModel } from "../model/create-transaction.response.model";
import { DeleteTransactionResponseModel } from "../model/delete-transaction.response.model";
import { TransactionRequestModel } from "../model/transaction.request.model";
import { TransactionResponseModel } from "../model/transaction.response.model";
import { UpdateTransactionResponseModel } from "../model/update-transaction.response.model";

@Injectable()
export class TransactionRepository {
  constructor(private transactionPostgresDbClient: TransactionPostgresDbClient, private listTransactionResponseToModelMapper: ListTransactionResponseToModelMapper) {}

  async createTransaction(payload: TransactionRequestModel, token: string): Promise<CreateTransactionResponseModel> {
    await this.transactionPostgresDbClient.createTransaction(payload, token);
    return {message: messagePtBr.transaction.created_transaction_successfully};
  }

  async listTransaction(token: string): Promise<TransactionResponseModel[]> {
    const listResponse = await this.transactionPostgresDbClient.findUserTransactions(token);
    const listResponseToModelMapped = this.listTransactionResponseToModelMapper.map(listResponse);
    return listResponseToModelMapped;
  }

  async updateTransaction(payload: TransactionRequestModel, transactionId: number): Promise<UpdateTransactionResponseModel> {
    await this.transactionPostgresDbClient.updateTransaction(payload, transactionId);
    return {message: messagePtBr.transaction.updated_transaction_successfully};
  }

  async deleteTransaction(transactionId: number): Promise<DeleteTransactionResponseModel> {
    await this.transactionPostgresDbClient.deleteTransaction(transactionId);
    return {message: messagePtBr.transaction.deleted_transaction_successfully}
  }
}
