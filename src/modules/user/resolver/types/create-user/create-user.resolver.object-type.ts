import { ApiProperty } from '@nestjs/swagger';

export class CreateUserObjectType {
  @ApiProperty({ example: 'Registered user successfully!' })
  message: string;
}
