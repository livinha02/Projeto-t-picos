import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListOptionRepository {
    constructor (private readonly prisma: PrismaService) {}
    async list () {
        const options = await this.prisma.option.findMany({});
        return Option;
    }
}