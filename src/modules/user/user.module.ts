import { Module } from '@nestjs/common';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { PrismaClient } from '@prisma/client';
import { CreateUserInput } from './resolver/types/create-user/create-user.resolver.input-type';
import { UserResolver } from './resolver/user.resolver';
import { UserPostgresDbClient } from './datasource/user.postgres.db-client';
import { UserRepository } from './repository/user.repository';
import { CreateUserService } from './service/create-user.service';
import { FindUserService } from './service/find-user.service';
import { FindUserResponseToModelMapper } from './datasource/mapper/find-user-response-to-model.mapper';
import { ChangePasswordUserService } from './service/change-password-user.service';

@Module({
  imports: [],
  providers: [
    CreateUserInput,
    PostgresDbClient,
    PrismaClient,
    UserPostgresDbClient,
    UserRepository,
    CreateUserService,
    FindUserService,
    FindUserResponseToModelMapper,
    ChangePasswordUserService,
  ],
  controllers: [UserResolver],
})
export class UserModule {}
