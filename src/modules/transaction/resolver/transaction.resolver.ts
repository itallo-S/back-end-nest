import { Body, Controller, Get, Headers, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/guard/jwt-auth.guard";
import { TransactionPostgresDbClient } from "../datasource/transaction-postgres-client/transaction.postgres.db-client";
import { CreateTransactionInputType } from "./types/create-transaction/create-transaction.resolver.input-type";
import { CreateTransactionObjectType } from "./types/create-transaction/create-transaction.resolver.object.type";

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionResolver {

  constructor(private transactionPostgresDbClient: TransactionPostgresDbClient) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create new transaction' })
  async createTransaction(@Body() createTransaction: CreateTransactionInputType, @Headers('authorization') token): Promise<any> {
    const transaction = await this.transactionPostgresDbClient.createTransaction(createTransaction, token )
    return transaction
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create new transaction' })
  async listTransactions(@Headers('authorization') token): Promise<any> {
    const testeGet = await this.transactionPostgresDbClient.findUserTransactions(token)
    return testeGet
  }
}
