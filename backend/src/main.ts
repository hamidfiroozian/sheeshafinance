import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './core/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Staking')
    .setDescription('Staking backend API documentation')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      in: 'docs',
      name: 'Authorization',
      bearerFormat: 'jwt',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ...configService.getExtraModels(),
  });
  SwaggerModule.setup('docs', app, document);
  await app.listen(3001);
}
bootstrap();
