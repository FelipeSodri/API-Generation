import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function generateSwagger() {
  const app = await NestFactory.create(AppModule, { logger: false });

  const options = new DocumentBuilder()
    .setTitle('API de Alunos')
    .setDescription('API para gerenciamento de alunos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Escreva o JSON da documentação em um arquivo
  writeFileSync('./src/swagger.json', JSON.stringify(document));

  app.close();
}

generateSwagger();
