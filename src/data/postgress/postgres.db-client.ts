/* eslint-disable consistent-return */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { handleServiceCustomErrorPrisma } from 'src/core/utils/api-client.prisma.error';

@Injectable()
export class PostgresDbClient {
  constructor(private prismaClient: PrismaClient) {}

  async create(payload: any, module: string): Promise<any> {
    try {
      const response = await this.prismaClient[module].create({ data: payload });
      return response;
    } catch (error) {
      handleServiceCustomErrorPrisma(error, HttpStatus.BAD_REQUEST);
    }
  }


  async find<T>(payloadLocalize: T, module: string): Promise<any> {
    try {
      const response = await this.prismaClient[module].findUnique({ where: payloadLocalize });
      if (response && response !== null) {
        return response;
      }
      handleServiceCustomErrorPrisma('Not Found.', HttpStatus.NOT_FOUND);
    } catch (error) {
      handleServiceCustomErrorPrisma(error, error.status);
    }
  }

  async list<T>(payloadLocalize: T, module: string): Promise<any> {
    try {
      const response = await this.prismaClient.transaction.findMany({ where: payloadLocalize });
      if (response && response !== null) {
        return response;
      }
      handleServiceCustomErrorPrisma('Not Found.', HttpStatus.NOT_FOUND);
    } catch (error) {
      handleServiceCustomErrorPrisma(error, error.status);
    }
  }

  async update<T, Y>(payload: T, localize: Y, module: string): Promise<any> {
    try {
      const response = await this.prismaClient[module].update({ where: localize, data: payload });
      return response;
    } catch (error) {
      handleServiceCustomErrorPrisma(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete<T>(localize: T, module: string): Promise<any> {
    try {
      const response = await this.prismaClient[module].delete({ where: localize });
      return response;
    } catch (error) {
      return 'delete - delete';
    }
  }
}
