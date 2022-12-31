import { ApiProperty } from '@nestjs/swagger';

export class UpdateTransactionObjectType {
  @ApiProperty({ example: 'Registered transaction successfully!' })
  message: string;
}
