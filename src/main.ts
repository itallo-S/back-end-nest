import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
//import { NewrelicInterceptor } from './newrelic.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Enterprise Building')
    .setDescription("The Enterprise Building it's a simple CRUD project.")
    .setVersion('1.0')
    .addBearerAuth({
      type:"http",
      scheme:'Bearer',
      bearerFormat:'JWT',
      } ,'Authorization')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //app.useGlobalInterceptors(new NewrelicInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(3000);
}

bootstrap();
