import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthService } from '../auth/service/auth.service';
import { TransactionPostgresDbClient } from './datasource/transaction-postgres-client/transaction.postgres.db-client';
import { TransactionResolver } from './resolver/transaction.resolver';

@Module({
  imports: [],
  providers: [TransactionPostgresDbClient, PostgresDbClient, PrismaClient, AuthService, JwtService, JwtStrategy] ,
  controllers: [TransactionResolver],
})
export class TransactionModule {}
