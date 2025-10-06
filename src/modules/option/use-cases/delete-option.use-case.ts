import { DeleteOptionRepository } from './../repository/delete-option.repository';
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class DeleteOptionUseCase {
   prisma: any;
   constructor ( private readonly deleteOptionRepository: DeleteOptionRepository,
    private readonly Logger: Logger,
   ) {}

    async execute (id: string) {
        try {
            return await this.deleteOptionRepository.delete(id);
        } catch (error) {
            this.Logger.error( error);
            throw error;
            
        }
        
    }
}