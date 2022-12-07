import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdatePassInput } from './types/update-password.input-type';
import { CreateUserInput } from './types/create-user/create-user.resolver.input-type';
import { CreateUserObjectType } from './types/create-user/create-user.resolver.object-type';
import { UserPostgresDbClient } from '../datasource/user.postgres.db-client';
import { CreateUserService } from '../service/create-user.service';
import { UserRepository } from '../repository/user.repository';
import { FindUserService } from '../service/find-user.service';
import { FindUserInput } from './types/find-user/find-user.resolver.input-type';
import { FindUserObjectType } from './types/find-user/find-user.resolver.object-type';
import { ChangePasswordUserService } from '../service/change-password-user.service';

@ApiTags('User')
@Controller('user')
export class UserResolver {
  constructor(
    private createUserService: CreateUserService,
    private findUserService: FindUserService,
    private userRepository: UserRepository,
    private changePasswordUserService: ChangePasswordUserService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  async createUser(@Body() createUserInput: CreateUserInput): Promise<CreateUserObjectType> {
    await this.createUserService.execute(createUserInput);
    return { message: 'aqui' };
  }

  @Put()
  @ApiOperation({ summary: 'Change password' })
  async updateUser(@Query() email: FindUserInput, @Body() updatePassInput: UpdatePassInput): Promise<any> {
    const response = await this.changePasswordUserService.execute(updatePassInput, email);
    return response;
  }

  @Get()
  @ApiOperation({ summary: 'Searching user' })
  async searchUser(@Query() email: FindUserInput): Promise<FindUserObjectType> {
    const response = await this.findUserService.execute(email);
    return response;
  }
}
