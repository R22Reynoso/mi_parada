import { Request, Response } from "express";
import { db } from "../config/db";

export const getTransports = (req: Request, res: Response) => {
  res.json(db.transports);
};

export const createTransports = (req: Request, res: Response) => {
  const id = db.transports.length + 1;
  const newTransports = { id, ...req.body };
  (db.users as any[]).push(newTransports);
  res.status(201).json(newTransports);
};
