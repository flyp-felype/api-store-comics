
import { Request, Response } from "express"
import ComicsServices from "../services/ComicsServices";

export default class ComicsController {


    async get(req: Request, res: Response) {
        try {
            const { id } = req.params

            if (!id) {
                throw new Error('Favor enviar um id!')
            }
            const comicsServices = new ComicsServices()

            const comic = await comicsServices.getById(Number(id))
            if (!comic) {
                throw new Error('Comic não encontrado!')
            }

            return res.status(200).json(comic)
        } catch (error) {
            return res.status(400).json({ mensagaem: error.toString() })
        }
    }
    async list(req: Request, res: Response) {
        try {
            const comicsServices = new ComicsServices()

            const litComics = await comicsServices.getList()

            console.log(litComics)

            return res.status(200).json(litComics)
        }
        catch (error) {
            console.log(error)
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async save(req: Request, res: Response) {
        try {
            console.log(req.body)
            const comicsServices = new ComicsServices()
            const { name, thumbnail } = req.body
            console.log(name)
            if (!name) {
                throw new Error('Nome obrigatório')
            }
            await comicsServices.save({ name, thumbnail })
            return res.status(200).json('Livro cadastrado com sucesso!')

        } catch (error) {
            return res.status(400).json(JSON.stringify({ mensagem: error.toString() }))
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params
            console.log(id)
            if (!id) {
                throw new Error('Favor passar o ID da Comics')
            }
            const comicsServices = new ComicsServices()

            await comicsServices.remove(Number(id))
            return res.status(200).json(JSON.stringify({ mensagem: 'Comics excluido com sucesso!' }))
        } catch (error) {
            console.log(error)
            return res.status(400).json(JSON.stringify({ mensagem: error.toString() }))
        }
    }
}