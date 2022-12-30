import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface userJWT {
  email: string;
  user: string;
  iat: string;
  exp: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  getTokenJWT(email: string, id: number): string {
    const payload = { email, user: id };
    const token = this.jwtService.sign(payload, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
      secret: process.env.SECRET_KEY_JWT_TOKEN,
    });

    return token;
  }

  decodeTokenJWT(fullToken: string): userJWT {
    const token = fullToken.split('Bearer ')[1]
    const decode = this.jwtService.decode(token);
    return decode as userJWT;
  }

  verifyTokenJWT(fullToken: string) {
    const token = fullToken.split('Bearer ')[1]
    const decode = this.jwtService.verify(token);
    return decode;
  }
}
