import { Request, Response } from "express";
import { db } from "../config/db";

export const getStops = (req: Request, res: Response) => {
  res.json(db.stops);
};

export const createTransports = (req: Request, res: Response) => {
  const id = db.stops.length + 1;
  const newStops = { id, ...req.body };
  (db.users as any[]).push(newStops);
  res.status(201).json(newStops);
};
