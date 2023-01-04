import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthService } from '../auth/service/auth.service';
import { DashboardTransactionResponseToModelMapper } from './datasource/transaction-postgres-client/mapper/dashboard-transaction-response-to-model.mapper';
import { ListTransactionResponseToModelMapper } from './datasource/transaction-postgres-client/mapper/list-transaction-response-to-model.mapper';
import { TransactionPostgresDbClient } from './datasource/transaction-postgres-client/transaction.postgres.db-client';
import { TransactionRepository } from './repository/transaction.repository';
import { TransactionResolver } from './resolver/transaction.resolver';
import { CreateTransactionService } from './service/create-transaction.service';
import { DashboardTransactionService } from './service/dashboard-transaction.service';
import { DeleteTransactionService } from './service/delete-transaction.service';
import { ListTransactionService } from './service/list-transaction.service';
import { UpdateTransactionService } from './service/update-transaction.service';

@Module({
  imports: [],
  providers: [
    TransactionPostgresDbClient,
    PostgresDbClient,
    PrismaClient,
    AuthService,
    JwtService,
    JwtStrategy,
    CreateTransactionService,
    TransactionRepository,
    ListTransactionResponseToModelMapper,
    ListTransactionService,
    UpdateTransactionService,
    DeleteTransactionService,
    DashboardTransactionResponseToModelMapper,
    DashboardTransactionService
  ],
  controllers: [TransactionResolver],
})
export class TransactionModule {}
