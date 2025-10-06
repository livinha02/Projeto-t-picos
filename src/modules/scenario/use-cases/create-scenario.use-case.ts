import { Injectable } from "@nestjs/common/decorators/core";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
import { Logger } from "@nestjs/common";
import { CreateScenarioRepository } from "../repository";

@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
        private readonly logger: Logger,
    ) {}
    async execute(data: CreateScenarioDto) {
        try {
            const scenario = await this.createScenarioRepository.create(data);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error; 
        }
    }
}

