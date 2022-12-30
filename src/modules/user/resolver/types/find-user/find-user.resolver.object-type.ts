import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserObjectType {
  @ApiProperty({ example: 'mario' })
  id: number;

  @ApiProperty({ example: 'mario' })
  name: string;

  @ApiProperty({ example: 'mario@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '213$mario' })
  password: string;
}
