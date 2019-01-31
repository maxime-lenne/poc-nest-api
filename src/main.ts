require('newrelic');
import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  //App http server
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  await app.enableCors();
  await app.listen(process.env.PORT, '0.0.0.0');

  //Swagger
  const options = new DocumentBuilder()
    .setTitle('Poc nest.js API')
    .setDescription('The Poc nest.js API description')
    .setVersion('1.0')
    .setSchemes('http', 'https')
    .addTag('categories')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

}
bootstrap();
