import IComics from "../domain/Comics";
import { CosmicRepository } from "../repositories/Prisma/Comics";

export default class ComicsServices {
  private comicsRepository: CosmicRepository;
  constructor() {
    this.comicsRepository = new CosmicRepository();
  }
  async getById(id: number) {
    return await this.comicsRepository.getById(id);
  }

  async getList() {
    return await this.comicsRepository.getList();
  }

  async save(comics: IComics) {
    return await this.comicsRepository.save(comics);
  }
  async remove(id: number) {
    return await this.comicsRepository.remove(id);
  }
}
