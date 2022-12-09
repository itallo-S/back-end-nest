import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { AuthService } from '../auth/service/auth.service';
import { FindUserResponseToModelMapper } from '../user/datasource/user-postgres-client/mapper/find-user-response-to-model.mapper';
import { LoginResponseToModelMapper } from '../user/datasource/user-postgres-client/mapper/login-response-to-model.mapper';
import { UserPostgresDbClient } from '../user/datasource/user-postgres-client/user.postgres.db-client';
import { UserRepository } from '../user/repository/user.repository';
import { LoginResolver } from './resolver/login.resolver';
import { LoginService } from './service/login.service';

@Module({
  imports: [],
  providers: [
    LoginService,
    UserRepository,
    UserPostgresDbClient,
    FindUserResponseToModelMapper,
    PostgresDbClient,
    PrismaClient,
    AuthService,
    JwtService,
    LoginResponseToModelMapper,
  ],
  controllers: [LoginResolver],
})
export class LoginModule {}
