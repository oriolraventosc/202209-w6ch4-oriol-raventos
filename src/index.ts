import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const apiPath = "/things";

interface thingsTypes {
  thing: string;
  id: number;
}

const thingsIKnow = {
  things: [
    { thing: "Html", id: 1 },
    { thing: "Sass", id: 2 },
    { thing: "TypeScript", id: 3 },
    { thing: "StyledComponents", id: 4 },
    { thing: "CSS", id: 5 },
  ],
};
const error404Message =
  "Cannot load your requested information. Try again in 5 minutes...";
const port = process.env.PORT;

const server = app.listen(port, () => {
  const { log, Console } = console;
  log("The server is alive");
});

app.use(morgan("dev"));

const error404 = (req: Request, res: Response) => {
  const { log, Console } = console;
  log(error404);
  res.status(404).json({
    error: error404Message,
  });
};
app.get(apiPath, (req, res, next) => {
  res.status(200).json({ thingsIKnow });
});

app.get(`${apiPath}/:idThinking`, (req, res) => {
  const { idThinking } = req.params;
  const { things } = thingsIKnow;
  const thing = things.find((thing) => thing.id === +idThinking);
  res.status(200).json({ thing });
});

app.delete(`${apiPath}/:idThinking`, (req, res) => {
  const { idThinking } = req.params;
  const { things } = thingsIKnow;
  const thing = things.find((thing) => thing.id === +idThinking);
  res.status(200).json({ thing });
});

app.use(error404);
