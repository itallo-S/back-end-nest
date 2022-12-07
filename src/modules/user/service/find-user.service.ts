import { Injectable } from '@nestjs/common';
import { FindUserRequestModel } from '../model/find-user-request.model';
import { FindUserResponseModel } from '../model/find-user-response.model';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class FindUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(payload: FindUserRequestModel): Promise<FindUserResponseModel> {
    const user = await this.userRepository.find(payload);
    return user;
  }
}
