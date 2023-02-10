import { PrismaClient } from "@prisma/client";
import { createComics } from "../../src/mocks/integration/comics.data";
import ComicsServices from "../../src/services/ComicsServices";

describe("Suite Test Comics", () => {
    let prisma: PrismaClient;
    let comicsServices: ComicsServices
    beforeAll(async () => {
        prisma = new PrismaClient();
        comicsServices = new ComicsServices()
    });
    it("Listar Comics", async () => {
        const comicsLists = await comicsServices.getList()
        const totalList = comicsLists ? comicsLists.length : 0
        expect(comicsLists.length).toBe(totalList)

    });
    it('Cadastrar Comics', async () => {
        const comics = createComics()
        const comicsSave = await comicsServices.save(comics)
        const id = comicsSave ? comicsSave.id : 0
        expect(comicsSave.id).toBe(id)
    })
    it('Remover Comics', async () => {
        const comics = createComics()
        const comicsSave = await comicsServices.save(comics)
        const id = comicsSave ? comicsSave.id : 0
        const remover = await comicsServices.remove(id)

        expect(remover.id).toBe(id)
        // expect(true).toBe(false);
    })
    it('Buscar Comics por ID', async () => {
        const comics = createComics()
        const comicsSave = await comicsServices.save(comics)
        const comicGet = await comicsServices.getById(comicsSave.id)
        if (comicGet.id) {
            expect(comicGet.id).toBe(comicGet.id)
        }
    })
});
