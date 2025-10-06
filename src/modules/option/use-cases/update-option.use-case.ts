import { Injectable, Logger } from "@nestjs/common";
import { UpdateOptionRepository } from "../repository";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionUseCase {
    constructor (
        private readonly updateOptionRepository: UpdateOptionRepository,
        private readonly Logger: Logger,
    ) {}

    async execute (id: string, data: UpdateOptionDto) {
      try {
        return await this.updateOptionRepository.update(id, data);
        } catch (error) {
            this.Logger.error( error);
            throw error;
      }
    }
}
