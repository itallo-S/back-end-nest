import { Injectable } from '@nestjs/common';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { ModulesPostgres } from 'src/data/postgress/postgres.types';
import { CreateUserRequestPostgresDTO } from './dto/create-user-request.postgres.dto';
import { CreateUserResponsePostgresDTO } from './dto/create-user-response.postgres.dto';

@Injectable()
export class UserPostgresDbClient {
  constructor(private postgresDbClient: PostgresDbClient) {}

  async createUser(payload: CreateUserRequestPostgresDTO): Promise<CreateUserResponsePostgresDTO> {
    const response: CreateUserResponsePostgresDTO = await this.postgresDbClient.create(payload, ModulesPostgres.USER);
    return response;
  }
}
