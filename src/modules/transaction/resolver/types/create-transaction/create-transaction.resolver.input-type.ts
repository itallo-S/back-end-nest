import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

enum TransactionType {
  OUTPUT = 'OUTPUT',
  INPUT = 'INPUT'
}

export class CreateTransactionInputType {
  @ApiProperty({ example: 50 })
  @IsNotEmpty({ message: 'Value is not provided' })
  value: number;

  @ApiProperty({ example: 'OUTPUT or INPUT' })
  @IsNotEmpty({ message: 'Type is not provided' })
  type: TransactionType;

  @ApiProperty({ example: 'Transaction Name' })
  @IsNotEmpty({ message: 'Name is not provided' })
  name: string;

  @ApiProperty({ example: 'Transaction Description' })
  description: string;

  @ApiProperty({ example: 'Transaction Category' })
  @IsNotEmpty({ message: 'Category is not provided' })
  category: string;
}
