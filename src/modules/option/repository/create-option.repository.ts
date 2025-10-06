import { Injectable } from "@nestjs/common";
import { CreateOptionDto } from "../dto/create-option.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class CreateOptionRepository {
    constructor (private readonly prisma: PrismaService){}

    async create (data: CreateOptionDto) {
        const option = await this.prisma.option.create({ data });
        return option;
    }
}