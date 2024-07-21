import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  const config = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('APpi de prototito braille')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);



  await app.listen(process.env.PORT || 3000);
}
bootstrap();
