import { Injectable } from '@nestjs/common';
import { CreateUserRequestModel } from '../model/create-user-request.model';
import { CreateUserResponseModel } from '../model/create-user-response.model';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async execute(payload: CreateUserRequestModel): Promise<any> {
    // const response = await this.userRepository.create(payload);
    // return response;
  }
}
