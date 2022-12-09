import { HttpService } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as moment from 'moment';
import { AuthTokenService } from 'src/auth-token/auth-token.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

describe('AuthService', () => {
  let authService: AuthService;

  const userData = {
    idUser: '1',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '12h' },
        }),
      ],
      providers: [AuthService, JwtStrategy],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('generate jwt with access_token as string', async () => {
    const { access_token } = await authService.getTokenJWT(userData);

    expect(typeof access_token).toBe("string");
  });

  it('generate jwt with id equals 1', async () => {
    const { access_token } = await authService.getTokenJWT(userData);

    const tokenInfo = await authService.decodeTokenJWT(access_token);

    expect(tokenInfo["id"]).toEqual("1");
  });

  it('generate jwt with 12 hours of validation', async () => {
    const { access_token } = await authService.getTokenJWT(userData);

    const tokenInfo = await authService.decodeTokenJWT(access_token);

    const timeExpirated = moment.unix(tokenInfo["exp"]).format("MM/DD/YYYY HH:mm");
    const timeNow = moment().add("12","hours").format("MM/DD/YYYY HH:mm")

    expect(timeExpirated).toBe(timeNow);
  });
});
