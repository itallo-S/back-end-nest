import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInResolverInputType {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'mario@gmail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: '213$mario' })
  password: string;
}
