import { ApiProperty } from '@nestjs/swagger';

export class CreateUserObjectType {
  @ApiProperty({ example: 'Usuário criado com sucesso!' })
  message: string;
}
