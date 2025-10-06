import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionRepository {
    constructor (private readonly prisma: PrismaService) {}
    
    async update (id: string, data: UpdateOptionDto) {
       return this.prisma.option.update({ where: { id: id }, data: data });
    }
}