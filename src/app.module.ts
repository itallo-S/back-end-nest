import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PostgresDbClient } from './data/postgress/postgres.db-client';
import { UserPostgresDbClient } from './modules/user/datasource/user.postgres.db-client';
import { UserRepository } from './modules/user/repository/user.repository';
import { CreateUserInput } from './modules/user/resolver/types/create-user/create-user.resolver.input-type';
import { UserResolver } from './modules/user/resolver/user.resolver';
import { UserService } from './modules/user/service/user.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserResolver],
  providers: [CreateUserInput, PostgresDbClient, PrismaClient, UserPostgresDbClient, UserRepository, UserService],
})
export class AppModule {}
