import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from "@nestjs/common";
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
    const response = await this.transactionPostgresDbClient.createTransaction(createTransaction, token );
    return response;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'List transactions' })
  async listTransactions(@Headers('authorization') token): Promise<any> {
    const response = await this.transactionPostgresDbClient.findUserTransactions(token);
    return response;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update transaction' })
  async updateTransaction(@Param('id') transactionId: number, @Body() payload, @Headers('authorization') token: string): Promise<any> {

    const response = await this.transactionPostgresDbClient.updateTransaction(payload, transactionId);
    return response;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete transaction' })
  async deleteTransaction(@Param('id') transactionId: number): Promise<any> {
    const response = await this.transactionPostgresDbClient.deleteTransaction(transactionId);
    return response;
  }
}
