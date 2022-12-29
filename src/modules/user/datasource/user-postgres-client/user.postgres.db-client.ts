import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { handleServiceCustomError } from 'src/core/error/handle-service-custom.error';
import { messagePtBr } from 'src/core/localized/message.pt-br';
import { handleServiceCustomErrorPrisma } from 'src/core/utils/api-client.prisma.error';
import { encrypto } from 'src/core/utils/crypto.utils';
import { PostgresDbClient } from 'src/data/postgress/postgres.db-client';
import { ModulesPostgres } from 'src/data/postgress/postgres.types';
import { ChangePasswordResponsePostgresDTO } from './dto/change-password-response.postgres.dto';
import { ChangePasswordRequestPostgresDTO } from './dto/change-password.request.postgres.dto';
import { CreateUserRequestPostgresDTO } from './dto/create-user-request.postgres.dto';
import { CreateUserResponsePostgresDTO } from './dto/create-user-response.postgres.dto';
import { FindUserRequestPostgresDTO } from './dto/find-user-request.postgres.dto';
import { FindUserResponsePostgresDTO } from './dto/find-user-response.postgres.dto';
import { LocalizeRequestPostgresDTO } from './dto/localize-request.postgres.dto';
import { SignInResponsePostgresDTO } from './dto/sign-in.response.postgres.dto';

@Injectable()
export class UserPostgresDbClient {
  constructor(private postgresDbClient: PostgresDbClient) {}

  async createUser(payload: CreateUserRequestPostgresDTO): Promise<CreateUserResponsePostgresDTO> {
    try {
      const response: CreateUserResponsePostgresDTO = await this.postgresDbClient.create(payload, ModulesPostgres.USER);
      return response;
    } catch (error) {
      Logger.error(error.response)
      handleServiceCustomError(messagePtBr.user.not_possible_to_create_user, HttpStatus.BAD_REQUEST);
    }
  }

  async findUser(payload: FindUserRequestPostgresDTO): Promise<FindUserResponsePostgresDTO> {
    try {
      const response: FindUserResponsePostgresDTO = await this.postgresDbClient.find(payload, ModulesPostgres.USER);
      return response;
    } catch (error) {
      Logger.error(error.response)
      handleServiceCustomError(messagePtBr.user.not_found_user, HttpStatus.BAD_REQUEST);
    }
  }

  async updateUser(
    payload: ChangePasswordRequestPostgresDTO,
    localize: LocalizeRequestPostgresDTO,
  ): Promise<ChangePasswordResponsePostgresDTO> {
    try {
      const response: ChangePasswordResponsePostgresDTO = await this.postgresDbClient.update(
        payload,
        localize,
        ModulesPostgres.USER,
      );
      return response;
    } catch (error) {
      Logger.error(error.response)
      handleServiceCustomError(messagePtBr.not_possible_updated, HttpStatus.BAD_REQUEST);
    }
  }

  async signIn(credentials: SignInResponsePostgresDTO): Promise<FindUserResponsePostgresDTO> {
    try {
      const user = await this.findUser({ email: credentials.email });

      if (credentials.password !== user.password) {
        throw handleServiceCustomError(messagePtBr.user.could_not_sign_in, HttpStatus.BAD_REQUEST);
      }

      return user;
    } catch (error) {
      Logger.error(error.response)
      throw handleServiceCustomError(messagePtBr.user.could_not_sign_in, HttpStatus.BAD_REQUEST);
    }
  }
}
