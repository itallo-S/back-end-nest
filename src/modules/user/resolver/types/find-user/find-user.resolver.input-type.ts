import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserInput {
  @ApiProperty({ example: 'mario@gmail.com' })
  @IsEmail()
  @IsNotEmpty({ message: 'email is not provided' })
  email: string;
}
