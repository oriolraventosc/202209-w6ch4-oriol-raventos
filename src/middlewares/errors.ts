import express, { Request, Response, NextFunction } from "express";

export const error404Message =
  "Cannot load your requested information. Try again in 5 minutes...";

export const error404 = (req: Request, res: Response) => {
  const { log } = console;
  log("Endpoint not found!");
  res.status(404).json({
    error: error404Message,
  });
};
