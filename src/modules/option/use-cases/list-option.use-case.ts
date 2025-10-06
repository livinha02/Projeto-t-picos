import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";

@Injectable()
export class ListOptionUseCase {
    constructor (private readonly listOptionRepository: ListOptionRepository,
        private readonly logger: Logger,
    ) {}
    
    async execute () {
        const options = await this.listOptionRepository.list();
        return options;
    }catch (error) {
        this.logger.error( error);
        throw error;
    }
}