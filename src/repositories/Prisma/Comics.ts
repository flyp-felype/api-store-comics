import { PrismaClient } from "@prisma/client";
// import IComics from "../../domain/Comics";

export class CosmicRepository {
    private db: PrismaClient

    constructor() {
        this.db = new PrismaClient()
    }

    async getById(id: number) {
        return await this.db.comics.findUnique({ where: { id } })
    }

    async getList() {
        return await this.db.comics.findMany()
    }

    async save(comics) {
        return await this.db.comics.create({ data: comics })
    }

    async remove(id: number) {
        return await this.db.comics.delete({ where: { id } })
    }
}