import { Injectable } from '@nestjs/common';
import { UserPostgresDbClient } from '../datasource/user.postgres.db-client';
import { CreateUserRequestModel } from '../model/create-user-request.model';
import { CreateUserResponseModel } from '../model/create-user-response.model';

@Injectable()
export class UserRepository {
  constructor(private userPostgresDbClient: UserPostgresDbClient) {}

  async create(payload: CreateUserRequestModel): Promise<CreateUserResponseModel> {
    await this.userPostgresDbClient.createUser(payload);
    return { message: 'Successfully registered user!' };
  }
}
