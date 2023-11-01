import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'ID único do aluno.',
    example: 1,
  })
  id: number;

  @Column()
  @ApiProperty({
    description: 'Nome do aluno.',
    example: 'João Silva',
  })
  nome: string;

  @Column()
  @ApiProperty({
    description: 'Idade do aluno.',
    example: 25,
  })
  idade: number;

  @Column({ name: 'nota_primeiro_semestre' })
  @ApiProperty({
    description: 'Nota do aluno no primeiro semestre.',
    example: 8.5,
  })
  notaPrimeiroSemestre: number;

  @Column({ name: 'nota_segundo_semestre' })
  @ApiProperty({
    description: 'Nota do aluno no segundo semestre.',
    example: 9.0,
  })
  notaSegundoSemestre: number;

  @Column({ name: 'nome_professor' })
  @ApiProperty({
    description: 'Nome do professor responsável pelo aluno.',
    example: 'Prof. Maria Oliveira',
  })
  nomeProfessor: string;

  @Column({ name: 'numero_sala' })
  @ApiProperty({
    description: 'Número da sala em que o aluno está matriculado.',
    example: 102,
  })
  numeroSala: number;
}
