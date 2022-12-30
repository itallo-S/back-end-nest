import { Injectable } from '@nestjs/common';
import { FindUserResponseModel } from '../../../model/find-user-response.model';
import { FindUserResponsePostgresDTO } from '../dto/find-user-response.postgres.dto';

@Injectable()
export class FindUserResponseToModelMapper {
  map(payload: FindUserResponsePostgresDTO): FindUserResponseModel {
    return {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
  }
}
