import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // <- Importe as classes necessárias
import { AlunoModule } from './aluno/aluno.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Alunos')
    .setDescription('API para gerenciamento de alunos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [AlunoModule],
  });

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(4000);
}

bootstrap();
