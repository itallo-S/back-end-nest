import { Injectable } from '@nestjs/common';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { ModulesPostgres } from 'src/data/postgress/postgres.types';
import { ChangePasswordResponsePostgresDTO } from './dto/change-password-response.postgres.dto';
import { ChangePasswordRequestPostgresDTO } from './dto/change-password.request.postgres.dto';
import { CreateUserRequestPostgresDTO } from './dto/create-user-request.postgres.dto';
import { CreateUserResponsePostgresDTO } from './dto/create-user-response.postgres.dto';
import { FindUserRequestPostgresDTO } from './dto/find-user-request.postgres.dto';
import { FindUserResponsePostgresDTO } from './dto/find-user-response.postgres.dto';
import { LocalizeRequestPostgresDTO } from './dto/localize-request.postgres.dto';

@Injectable()
export class UserPostgresDbClient {
  constructor(private postgresDbClient: PostgresDbClient) {}

  async createUser(payload: CreateUserRequestPostgresDTO): Promise<CreateUserResponsePostgresDTO> {
    const response: CreateUserResponsePostgresDTO = await this.postgresDbClient.create(payload, ModulesPostgres.USER);
    return response;
  }

  async findUser(payload: FindUserRequestPostgresDTO): Promise<FindUserResponsePostgresDTO> {
    const response: FindUserResponsePostgresDTO = await this.postgresDbClient.find(payload, ModulesPostgres.USER);
    return response;
  }

  async updateUser(
    payload: ChangePasswordRequestPostgresDTO,
    localize: LocalizeRequestPostgresDTO,
  ): Promise<ChangePasswordResponsePostgresDTO> {
    const response: ChangePasswordResponsePostgresDTO = await this.postgresDbClient.update(
      payload,
      localize,
      ModulesPostgres.USER,
    );
    return response;
  }
}
