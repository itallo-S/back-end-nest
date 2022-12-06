import { ApiProperty } from '@nestjs/swagger';

export class UpdatePassInput {
  @ApiProperty({ example: '213$mario' })
  confirmPass: string;

  @ApiProperty({ example: '213$mario' })
  password: string;
}
