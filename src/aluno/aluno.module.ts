import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoController } from './aluno.controller';
import { Aluno } from './aluno.entity';
import { AlunoService } from './aluno.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  providers: [AlunoService],
  controllers: [AlunoController],
})
export class AlunoModule {}
