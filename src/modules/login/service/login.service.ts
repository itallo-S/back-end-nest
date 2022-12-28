import { Injectable } from '@nestjs/common';
import { encrypto } from 'src/core/utils/crypto.utils';
import { AuthService } from 'src/modules/auth/service/auth.service';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { SignInRequestModel } from '../model/sign-in.request.model';
import { SignInResponseModel } from '../model/sign-in.response.model';

@Injectable()
export class LoginService {
  constructor(private userRepository: UserRepository, private authService: AuthService) {}

  async execute(credentials: SignInRequestModel): Promise<SignInResponseModel> {
    const password = encrypto(credentials.password);
    const signIn = await this.userRepository.login({...credentials, password});

    return signIn;
  }
}
