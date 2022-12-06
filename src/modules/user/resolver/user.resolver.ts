import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdatePassInput } from './types/update-password.input-type';
import { CreateUserInput } from './types/create-user/create-user.resolver.input-type';
import { CreateUserObjectType } from './types/create-user/create-user.resolver.object-type';
import { UserPostgresDbClient } from '../datasource/user.postgres.db-client';
import { UserService } from '../service/user.service';

@ApiTags('User')
@Controller('user')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  async createUser(@Body() createUserInput: CreateUserInput): Promise<CreateUserObjectType> {
    await this.userService.execute(createUserInput);
    return { message: 'aqui' };
  }

  @Put()
  @ApiOperation({ summary: 'Change password' })
  async updateUser(@Body() updatePassInput: UpdatePassInput): Promise<boolean> {
    return true;
  }
}
