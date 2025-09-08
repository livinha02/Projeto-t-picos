import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, ListScenarioUseCase } from './use-cases'


@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, private readonly ListScenarioUseCase: ListScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.ListScenarioUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
