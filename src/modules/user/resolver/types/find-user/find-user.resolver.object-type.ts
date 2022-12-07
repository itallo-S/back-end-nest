import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserObjectType {
  @ApiProperty({ example: 'mario' })
  @IsNotEmpty({ message: 'Name is not provided' })
  name: string;

  @ApiProperty({ example: 'mario@gmail.com' })
  @IsEmail()
  @IsNotEmpty({ message: 'email is not provided' })
  email: string;

  @ApiProperty({ example: '213$mario' })
  @IsNotEmpty({ message: 'password is not provided' })
  password: string;
}
