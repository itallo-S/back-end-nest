import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtData } from './interfaces';

export const UserInfoByJwt = createParamDecorator((data: string, ctx: ExecutionContext): JwtData => {
  const request = ctx.switchToHttp().getRequest();
  return request.email as JwtData;
});
