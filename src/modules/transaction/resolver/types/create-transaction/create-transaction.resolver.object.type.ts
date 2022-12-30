import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionObjectType {
  @ApiProperty({ example: 'Registered transaction successfully!' })
  message: string;
}
