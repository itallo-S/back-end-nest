import { Injectable } from '@nestjs/common';
import { FindUserResponseModel } from '../../../model/find-user-response.model';
import { FindUserResponsePostgresDTO } from '../dto/find-user-response.postgres.dto';

@Injectable()
export class FindUserResponseToModelMapper {
  map(payload: FindUserResponsePostgresDTO): FindUserResponseModel {
    return {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
  }
}
