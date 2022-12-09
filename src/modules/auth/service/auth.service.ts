import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  getTokenJWT(email: string): string {
    const payload = { email };
    const token = this.jwtService.sign(payload, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
      secret: process.env.SECRET_KEY_JWT_TOKEN,
    });

    return token;
  }

  decodeTokenJWT(token: string) {
    const decode = this.jwtService.decode(token);
    return decode;
  }

  verifyTokenJWT(token: string) {
    const decode = this.jwtService.verify(token, { secret: process.env.SECRET_KEY_JWT_TOKEN });
    return decode;
  }
}
