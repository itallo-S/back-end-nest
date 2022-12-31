import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/guard/jwt-auth.guard";
import { TransactionPostgresDbClient } from "../datasource/transaction-postgres-client/transaction.postgres.db-client";
import { CreateTransactionService } from "../service/create-transaction.service";
import { DeleteTransactionService } from "../service/delete-transaction.service";
import { ListTransactionService } from "../service/list-transaction.service";
import { UpdateTransactionService } from "../service/update-transaction.service";
import { CreateTransactionInputType } from "./types/create-transaction/create-transaction.resolver.input-type";
import { CreateTransactionObjectType } from "./types/create-transaction/create-transaction.resolver.object.type";
import { DeleteTransactionResolverObjectType } from "./types/delete-transaction/delete-transaction.resolver.object-type";
import { ListTransactionResolverObjectType } from "./types/list-transaction/list-transaction.resolver.object-type";
import { UpdateTransactionInputType } from "./types/update-transaction/update-transaction.resolver.input-type";
import { UpdateTransactionObjectType } from "./types/update-transaction/update-transaction.resolver.object.type";

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionResolver {

  constructor(
    private createTransactionService: CreateTransactionService,
    private updateTransactionService: UpdateTransactionService,
    private deleteTransactionService: DeleteTransactionService,
    private listTransactionService: ListTransactionService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create new transaction' })
  async createTransaction(@Body() payload: CreateTransactionInputType, @Headers('authorization') token: string): Promise<CreateTransactionObjectType> {
    const response = await this.createTransactionService.execute(payload, token );
    return response;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'List transactions' })
  async listTransactions(@Headers('authorization') token: string): Promise<ListTransactionResolverObjectType[]> {
    const response = await this.listTransactionService.execute(token);
    return response;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update transaction' })
  async updateTransaction(@Param('id') transactionId: number, @Body() payload: UpdateTransactionInputType): Promise<UpdateTransactionObjectType> {
    const response = await this.updateTransactionService.execute(payload, transactionId);
    return response;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete transaction' })
  async deleteTransaction(@Param('id') transactionId: number): Promise<DeleteTransactionResolverObjectType> {
    const response = await this.deleteTransactionService.execute(transactionId);
    return response;
  }
}
