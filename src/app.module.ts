import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PostgresDbClient } from './data/postgress/postgres.db-client';
import { FindUserResponseToModelMapper } from './modules/user/datasource/mapper/find-user-response-to-model.mapper';
import { UserPostgresDbClient } from './modules/user/datasource/user.postgres.db-client';
import { UserRepository } from './modules/user/repository/user.repository';
import { CreateUserInput } from './modules/user/resolver/types/create-user/create-user.resolver.input-type';
import { UserResolver } from './modules/user/resolver/user.resolver';
import { ChangePasswordUserService } from './modules/user/service/change-password-user.service';
import { CreateUserService } from './modules/user/service/create-user.service';
import { FindUserService } from './modules/user/service/find-user.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserResolver],
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
})
export class AppModule {}
