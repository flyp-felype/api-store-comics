import express, {Express} from 'express'
import dotenv from 'dotenv'
import ComicsController from './controller/ComicsController'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

const comicsController = new ComicsController()

app.get('/', comicsController.list)
app.post('/save', comicsController.save)

app.listen(port, () => {
    console.log(`server ins running at http://localhost:${port}`)
})