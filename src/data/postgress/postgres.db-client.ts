import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ModulesPostgres } from './postgres.types';

@Injectable()
export class PostgresDbClient {
  constructor(private prismaClient: PrismaClient) {}

  async create(payload: any, module: ModulesPostgres) {
    try {
      const response = await this.prismaClient[module].create({ data: payload });
      return response;
    } catch (error) {
      throw Error('error - create');
    }
  }

  async find<T>(payloadLocalize: T, module: ModulesPostgres) {
    try {
      const response = await this.prismaClient[module].findUnique({ where: payloadLocalize });
      return response;
    } catch (error) {
      throw Error('error - find');
    }
  }

  async update<T>(payload: T, localize: T, module: ModulesPostgres) {
    try {
      const response = await this.prismaClient[module].update({ where: localize, data: payload });
      return response;
    } catch (error) {
      return 'update - update';
    }
  }

  async delete<T>(localize: T, module: ModulesPostgres) {
    try {
      const response = await this.prismaClient[module].delete({ where: localize });
      return response;
    } catch (error) {
      return 'delete - delete';
    }
  }
}
