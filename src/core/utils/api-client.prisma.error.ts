import { HttpException, HttpStatus } from '@nestjs/common';

enum ErrorReference {
  P2002 = 'Unique constraint failed on the',
}

export const handleServiceCustomErrorPrisma = (error, status: HttpStatus): HttpException => {
  if (error.code === 'P2002') {
    throw new HttpException(`${ErrorReference.P2002} ${error.meta.target}`, HttpStatus.BAD_REQUEST);
  }

  throw new HttpException(error, status);
};
