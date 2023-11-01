import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Aluno } from './aluno.entity';
import { AlunoService } from './aluno.service';

@Controller('alunos')
@ApiTags('Alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de todos os alunos' })
  findAll(): Promise<Aluno[]> {
    return this.alunoService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Detalhes de um aluno' })
  findOne(@Param('id') id: number): Promise<Aluno> {
    return this.alunoService.findOne(id);
  }

  @Post()
  @ApiBody({ type: Aluno })
  @ApiResponse({ status: 201, description: 'Aluno criado com sucesso' })
  create(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: Aluno })
  @ApiResponse({ status: 200, description: 'Aluno atualizado com sucesso' })
  update(@Param('id') id: number, @Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.update(id, aluno);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Aluno excluído com sucesso' })
  async remove(@Param('id') id: number): Promise<void> {
    await this.alunoService.remove(id);
  }
}
