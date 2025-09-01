import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UseCase from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/databases/shared.module';

const UseCases = Object.values(UseCase);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...UseCases, ...repositories, Logger],
})
export class ScenarioModule {}
