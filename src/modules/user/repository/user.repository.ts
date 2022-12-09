import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginRequestPostgresModel } from '../model/login-request.model';
import { FindUserResponseToModelMapper } from '../datasource/user-postgres-client/mapper/find-user-response-to-model.mapper';
import { UserPostgresDbClient } from '../datasource/user-postgres-client/user.postgres.db-client';
import { ChangePasswordRequestModel } from '../model/change-password.request.model';
import { ChangePasswordResponseModel } from '../model/change-password.response.model';
import { CreateUserRequestModel } from '../model/create-user-request.model';
import { CreateUserResponseModel } from '../model/create-user-response.model';
import { FindUserRequestModel } from '../model/find-user-request.model';
import { FindUserResponseModel } from '../model/find-user-response.model';
import { LocalizeRequestModel } from '../model/localize-request.model';
import { LoginResponsePostgresModel } from '../model/login-response.model';
import { LoginResponseToModelMapper } from '../datasource/user-postgres-client/mapper/login-response-to-model.mapper';

@Injectable()
export class UserRepository {
  constructor(
    private userPostgresDbClient: UserPostgresDbClient,
    private findUserResponseToModelMapper: FindUserResponseToModelMapper,
    private authService: AuthService,
    private loginResponseToModelMapper: LoginResponseToModelMapper,
  ) {}

  async create(payload: CreateUserRequestModel): Promise<CreateUserResponseModel> {
    await this.userPostgresDbClient.createUser(payload);
    return { message: 'Registered user successfully!' };
  }

  async find(payload: FindUserRequestModel): Promise<FindUserResponseModel> {
    const user = await this.userPostgresDbClient.findUser(payload);
    const userResponseToModelMapped = this.findUserResponseToModelMapper.map(user);
    return userResponseToModelMapped;
  }

  async changePassword(
    payload: ChangePasswordRequestModel,
    localize: LocalizeRequestModel,
  ): Promise<ChangePasswordResponseModel> {
    await this.userPostgresDbClient.updateUser(payload, localize);
    return { message: 'Updated password successfully!' };
  }

  async login(payload: LoginRequestPostgresModel): Promise<LoginResponsePostgresModel> {
    const user = await this.userPostgresDbClient.signIn(payload);
    const tokenJwt = this.authService.getTokenJWT(user.email);
    const logginMapped = this.loginResponseToModelMapper.map(user, tokenJwt);

    return logginMapped;
  }
}
