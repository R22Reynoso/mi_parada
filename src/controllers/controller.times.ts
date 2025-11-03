import { Request, Response } from "express";
import { db } from "../config/db";

export const getTimes = (req: Request, res: Response) => {
  res.json(db.times);
};

export const createTimes = (req: Request, res: Response) => {
  const id = db.times.length + 1;
  const newTimes = { id, ...req.body };
  (db.times as Date[]).push(newTimes);
  res.status(201).json(newTimes);
};
