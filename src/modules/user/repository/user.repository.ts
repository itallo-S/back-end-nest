import { Injectable } from '@nestjs/common';
import { FindUserResponseToModelMapper } from '../datasource/mapper/find-user-response-to-model.mapper';
import { UserPostgresDbClient } from '../datasource/user.postgres.db-client';
import { CreateUserRequestModel } from '../model/create-user-request.model';
import { CreateUserResponseModel } from '../model/create-user-response.model';
import { FindUserRequestModel } from '../model/find-user-request.model';
import { FindUserResponseModel } from '../model/find-user-response.model';

@Injectable()
export class UserRepository {
  constructor(
    private userPostgresDbClient: UserPostgresDbClient,
    private findUserResponseToModelMapper: FindUserResponseToModelMapper,
  ) {}

  async create(payload: CreateUserRequestModel): Promise<CreateUserResponseModel> {
    await this.userPostgresDbClient.createUser(payload);
    return { message: 'Successfully registered user!' };
  }

  async find(payload: FindUserRequestModel): Promise<FindUserResponseModel> {
    const user = await this.userPostgresDbClient.findUser(payload);
    const userResponseToModelMapped = this.findUserResponseToModelMapper.map(user);
    return userResponseToModelMapped;
  }
}
