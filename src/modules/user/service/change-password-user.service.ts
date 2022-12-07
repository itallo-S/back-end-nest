import { HttpStatus, Injectable } from '@nestjs/common';
import { handleServiceCustomErrorPrisma } from 'src/core/utils/api-client.prisma.error';
import { encrypto } from 'src/core/utils/crypto.utils';
import { ChangePasswordRequestModel } from '../model/change-password.request.model';
import { ChangePasswordResponseModel } from '../model/change-password.response.model';
import { LocalizeRequestModel } from '../model/localize-request.model';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class ChangePasswordUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(
    payload: ChangePasswordRequestModel,
    localize: LocalizeRequestModel,
  ): Promise<ChangePasswordResponseModel> {
    const passwordEncrypt = encrypto(payload.password);
    const confirmPasswordEncrypt = encrypto(payload.confirmPass);

    if (passwordEncrypt === confirmPasswordEncrypt) {
      const response = this.userRepository.changePassword({ password: passwordEncrypt }, localize);
      return response;
    }
    throw handleServiceCustomErrorPrisma('Passwords do not match', HttpStatus.BAD_REQUEST);
  }
}
