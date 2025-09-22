import { Option } from './../entities/option.entity';
export class CreateOptionDto {

}
import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteoptionUseCase, ListOptionUseCase, FindOneScenarioUseCase } from './use-cases';
import { UpdateOptionUseCase } from './use-cases/update-option.use-case';

@Injectable()
export class OptionService {
  deleteOptionUseCase: any;
    findOneOptionUseCase: any;
  constructor(private readonly createScenarioUseCase : CreateOptionUseCase, 
    private readonly listScenarioUseCase : ListOptionUseCase,
    private readonly deleteScenarioUseCase : DeleteOptionUseCase,
    private readonly findOneScenarioUseCase : FindOneOptionUseCase,
    private readonly updateScenarioUseCase : UpdateOptionUseCase,
  ) {}
  create(CreateOptionDto: CreateOptionDto) {
    return this.deleteOptionUseCase.execute(CreateOptionDto);
  }

  async findAll() {
    return await this.deleteOptionUseCase.execute();
  }

  async findOne(id: string) {
   return await this.findOneOptionUseCase.execute(id);
}

  async update(id: number, updateOptionDto: UpdateOptionDto) {
    return await this.deleteOptionUseCase.execute(id.toString(), UpdateOptionDto);
  }

  async remove(id: string) {
    return await this.deleteOptionUseCase.execute(id);
  }
}