import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdatePassInput {
  @ApiProperty({ example: '213$mario' })
  @IsNotEmpty({ message: 'Confirm password is not provided' })
  confirmPass: string;

  @ApiProperty({ example: '213$mario' })
  @IsNotEmpty({ message: 'Password is not provided' })
  password: string;
}
