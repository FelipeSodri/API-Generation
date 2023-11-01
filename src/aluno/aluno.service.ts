import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
  ) {}

  findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  findOne(id: number): Promise<Aluno> {
    return this.alunoRepository.findOne({ where: { id: id } });
  }

  create(aluno: Aluno): Promise<Aluno> {
    return this.alunoRepository.save(aluno);
  }

  update(id: number, aluno: Aluno): Promise<Aluno> {
    aluno.id = id;
    return this.alunoRepository.save(aluno);
  }

  async remove(id: number): Promise<void> {
    await this.alunoRepository.delete(id);
  }
}
