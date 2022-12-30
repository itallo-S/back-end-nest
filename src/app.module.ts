import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PostgresDbClient } from './data/postgress/postgres.db-client';
import { LoginModule } from './modules/login/login.module';
import { FindUserResponseToModelMapper } from './modules/user/datasource/user-postgres-client/mapper/find-user-response-to-model.mapper';
import { UserPostgresDbClient } from './modules/user/datasource/user-postgres-client/user.postgres.db-client';
import { UserRepository } from './modules/user/repository/user.repository';
import { CreateUserInput } from './modules/user/resolver/types/create-user/create-user.resolver.input-type';
import { UserResolver } from './modules/user/resolver/user.resolver';
import { ChangePasswordUserService } from './modules/user/service/change-password-user.service';
import { CreateUserService } from './modules/user/service/create-user.service';
import { FindUserService } from './modules/user/service/find-user.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/service/auth.service';
import { LoginResponseToModelMapper } from './modules/user/datasource/user-postgres-client/mapper/login-response-to-model.mapper';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [UserModule, LoginModule, AuthModule, TransactionModule],
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
    AuthService,
    JwtService,
    LoginResponseToModelMapper,
  ],
})
export class AppModule {}
