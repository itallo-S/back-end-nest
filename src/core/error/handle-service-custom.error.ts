import { HttpException, HttpStatus } from '@nestjs/common';

export const handleServiceCustomError = (message, status: HttpStatus): HttpException => {

  throw new HttpException(message, status);
};
