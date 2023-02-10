import ComicsServices from "../services/ComicsServices";

import { Request, Response } from "express";

export default class ComicsController {


    async list(req: Request, res: Response) {
        try {
            const comicsServices = new ComicsServices()

            const litComics = await comicsServices.getList()

            console.log(litComics)

            return res.status(200).json(litComics)
        }
        catch (error) {
            console.log(error)
            return res.status(400).json(JSON.parse(error))
        }
    }

    async save(req: Request, res: Response) {
        try {
            const comicsServices = new ComicsServices()
            const { name, thumbnail } = req.body

            if (!name) {
                throw new Error('Nome obrigatório')
            }
            await comicsServices.save({ name, thumbnail })
            return res.status(200).json('Livro cadastrado com sucesso!')

        } catch (error) {
            return res.status(400).json(JSON.parse(error))
        }
    }
}