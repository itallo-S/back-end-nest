import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { handleServiceCustomError } from "src/core/error/handle-service-custom.error";
import { messagePtBr } from "src/core/localized/message.pt-br";
import { PostgresDbClient } from "src/data/postgress/postgres.db-client";
import { ModulesPostgres } from "src/data/postgress/postgres.types";
import { AuthService } from "src/modules/auth/service/auth.service";
import { CreateTransactionRequestPostgresDTO } from "./dto/create-transaction.request.postgres.dto";
import { TransactionResponsePostgresDTO } from "./dto/transaction.response.postgres.dto";

@Injectable()
export class TransactionPostgresDbClient {

  constructor(
    private postgresDbClient: PostgresDbClient,
    private authService: AuthService,
    ) {}


  async createTransaction(payload: CreateTransactionRequestPostgresDTO, token: string): Promise<TransactionResponsePostgresDTO> {
    try {
      const {user} = this.authService.decodeTokenJWT(token);

      if(!user) {
        handleServiceCustomError(messagePtBr.transaction.not_possible_to_create_transaction, HttpStatus.BAD_REQUEST);
      }

      const response: TransactionResponsePostgresDTO = await this.postgresDbClient.create({...payload, userId: user}, ModulesPostgres.TRANSACTION);

      return response;
    } catch (error) {
      Logger.error(error.response)
      handleServiceCustomError(messagePtBr.transaction.not_possible_to_create_transaction, HttpStatus.BAD_REQUEST);
    }
  }

  async findUserTransactions(token: string): Promise<TransactionResponsePostgresDTO[]> {
    try {
      const {user} = this.authService.decodeTokenJWT(token);
      const listTransactions: TransactionResponsePostgresDTO[] = await this.postgresDbClient.list({userId: user}, ModulesPostgres.TRANSACTION)

      if(listTransactions.length <= 0) {
        throw handleServiceCustomError(messagePtBr.transaction.not_found_any_transaction, HttpStatus.NOT_FOUND);
      }

      return listTransactions
    } catch (error) {
      if(error.response === messagePtBr.transaction.not_found_any_transaction) {
        Logger.error(error.response)
        handleServiceCustomError(messagePtBr.transaction.not_found_any_transaction, HttpStatus.NOT_FOUND);
      }
      Logger.error(error.response)
      handleServiceCustomError(messagePtBr.genericError, HttpStatus.BAD_REQUEST);
    }
  }

  async updateTransaction() {

  }

  async deleteTransaction() {

  }

}
