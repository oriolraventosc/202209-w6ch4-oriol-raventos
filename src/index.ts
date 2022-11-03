import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";

const app = express();

const apiPath = "/things";
const thingsIKnow = ["Html", "Sass", "TypeScript", "StyledComponents", "CSS"];
const error404 =
  "Cannot load your requested information. Try again in 5 minutes...";
const port = 3000;

const server = app.listen(port, () => {
  const { log, Console } = console;
  log("The server is alive");
});

app.use(morgan("dev"));

app.get(apiPath, (req, res, next) => {
  res.status(200).json({ thingsIKnow });
});

app.use((req: Request, res: Response) => {
  const { log, Console } = console;
  log(error404);
  res.status(404).json({
    error: error404,
  });
});
