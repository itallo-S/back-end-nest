import { Injectable } from '@nestjs/common';
import { LoginResponsePostgresModel } from 'src/modules/user/model/login-response.model';
import { FindUserResponsePostgresDTO } from '../dto/find-user-response.postgres.dto';

@Injectable()
export class LoginResponseToModelMapper {
  map(user: FindUserResponsePostgresDTO, token: string): LoginResponsePostgresModel {
    return {
      user: user.name,
      email: user.email,
      token,
    };
  }
}
