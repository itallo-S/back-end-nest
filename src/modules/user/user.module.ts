import { Module } from '@nestjs/common';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { PrismaClient } from '@prisma/client';
import { CreateUserInput } from './resolver/types/create-user/create-user.resolver.input-type';
import { UserResolver } from './resolver/user.resolver';
import { UserPostgresDbClient } from './datasource/user.postgres.db-client';
import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  providers: [CreateUserInput, PostgresDbClient, PrismaClient, UserPostgresDbClient, UserRepository, UserService],
  controllers: [UserResolver],
})
export class UserModule {}
