import { CreateOptionDto } from '../dto/create-option.dto';
import { CreateOptionRepository } from './../repository/create-option.repository';
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class CreateOptionUseCase {
    constructor (private readonly CreateOptionRepository: CreateOptionRepository,
        private readonly Logger: Logger,
    ) {}

    async execute (data: CreateOptionDto) {
        try {
            const option = await this.CreateOptionRepository.create(data);
            return option;
        } catch (error) {
            this.Logger.error( error);
            throw error;
        }
    }
}
