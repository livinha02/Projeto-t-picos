import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, DeleteScenarioUseCase, ListScenarioUseCase, FindOneScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase : CreateScenarioUseCase, 
    private readonly listScenarioUseCase : ListScenarioUseCase,
    private readonly deleteScenarioUseCase : DeleteScenarioUseCase,
    private readonly findOneScenarioUseCase : FindOneScenarioUseCase
  ) {}
  create(CreateScenarioDto: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(CreateScenarioDto);
  }

  async findAll() {
    return await this.listScenarioUseCase.execute();
  }

  async findOne(id: string) {
   return await this.findOneScenarioUseCase.execute(id);
}

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  async remove(id: string) {
    return await this.deleteScenarioUseCase.execute(id);
  }
}