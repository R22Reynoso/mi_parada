import { Request, Response } from "express";
import { db } from "../config/db";

export const getUsers = (req: Request, res: Response) => {
  res.json(db.users);
};

export const createUser = (req: Request, res: Response) => {
  const id = db.users.length + 1;
  const newUser = { id, ...req.body };
  (db.users as any[]).push(newUser);
  res.status(201).json(newUser);
};
