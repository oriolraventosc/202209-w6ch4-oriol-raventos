import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import {
  getThings,
  getThingById,
  deleteThingById,
  createNewThing,
} from "./controllers/controllers";
import { error404 } from "./middlewares/errors";

dotenv.config();

const app = express();

const apiPath = "/things";

const port = process.env.PORT;

const server = app.listen(port, () => {
  const { log } = console;
  log("The server is alive");
});

app.use(morgan("dev"));

app.use(express.json());

app.get(apiPath, getThings);

app.get(`${apiPath}/:idThinking`, getThingById);

app.delete(`${apiPath}/:idThinking`, deleteThingById);

app.post(apiPath, createNewThing);

app.use(error404);
