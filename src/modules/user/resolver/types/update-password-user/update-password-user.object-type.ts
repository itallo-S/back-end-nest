import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordUserObjectType {
  @ApiProperty({ example: 'Updated password successfully!' })
  message: string;
}
