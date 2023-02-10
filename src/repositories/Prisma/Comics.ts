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
        console.log('ID ', id)
        const comic = await this.db.comics.findUnique({ where: { id } })
        if (comic) {

            return await this.db.comics.delete({ where: { id } })
        }
        else {
            throw new Error('Não encontramos uma Comics com este ID')
        }
    }
}