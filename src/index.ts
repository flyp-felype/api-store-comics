import express, { Express } from "express";
import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import ComicsController from "./controller/ComicsController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const comicsController = new ComicsController();

app.use(bodyParser.json());
app.get("/", comicsController.list);
app.get("/comics/:id", comicsController.get);
app.post("/save", comicsController.save);
app.delete("/comics/:id", comicsController.remove);

app.listen(port, () => {
  console.log(`server ins running at http://localhost:${port}`);
});
