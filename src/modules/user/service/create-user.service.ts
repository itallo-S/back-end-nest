import { Injectable } from '@nestjs/common';
import { encrypto } from 'src/core/utils/crypto.utils';
import { CreateUserRequestModel } from '../model/create-user-request.model';
import { CreateUserResponseModel } from '../model/create-user-response.model';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(payload: CreateUserRequestModel): Promise<CreateUserResponseModel> {
    const password = encrypto(payload.password);
    const response = await this.userRepository.create({
      email: payload.email,
      name: payload.name,
      password: password,
    });
    return response;
  }
}
