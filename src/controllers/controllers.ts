import { Request, Response, NextFunction } from "express";
import thingsIKnow from "../data/thingsIKnow";

export const getThings = (req: Request, res: Response) => {
  const { log } = console;
  if (!thingsIKnow) {
    log("Get request failed!");
    res
      .status(400)
      .json({ error: "There are no things... Try a different endpoint" });
    return;
  }
  log("Get request arrived!");
  res.status(200).json({ thingsIKnow });
};

export const getThingById = (req: Request, res: Response) => {
  const { log } = console;
  const { idThinking } = req.params;
  const { things } = thingsIKnow;
  const thing = things.find((thing) => thing.id === +idThinking);

  if (!thing) {
    log("Get request failed!");
    res
      .status(400)
      .json({ error: "There is no thing... Try with a diferent endpoint" });
    return;
  }
  log("Get request arrived!");
  res.status(200).json({ thing });
};

export const deleteThingById = (req: Request, res: Response) => {
  const { log } = console;
  const { idThinking } = req.params;
  const { things } = thingsIKnow;
  const thing = things.find((thing) => thing.id === +idThinking);
  if (!thing) {
    log("Delete request failed!");
    res.status(400).json({ error: "We couldn't find that id!" });
    return;
  }
  things.slice(thing.id - 1, 1);
  log("Delete request arrived!");
  res.status(204).json({ thingsIKnow });
};

export const createNewThing = (req: Request, res: Response) => {
  const { log } = console;
  let { thing } = req.body;
  const { things } = thingsIKnow;
  const thingToAdd = { thing: `${thing}` };
  const newThing = {
    thing: thingToAdd.thing,
    id: things.length + 1,
  };
  if (thingToAdd.thing === `${{ thing: "undefined" }}`) {
    log("Post request failed!");
    res.status(400).json({ error: "Your thing is empty..." });
  }
  log("Post request arrived!");
  things.push(newThing);
  res.status(201).json({ things });
};
