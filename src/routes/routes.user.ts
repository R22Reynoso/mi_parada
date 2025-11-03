import { Router } from "express";
import { UserRole } from "../enums/enums.global";
import { verifyToken } from "../middlewares/middleware.auth";
import { Request, Response } from "express";
import { db } from "../config/db";
 
const router = Router();

export const getUsers = (req: Request, res: Response) => {
  res.json(db.users);
};

export const createUser = (req: Request, res: Response) => {
  const id = db.users.length + 1;
  const newUser = { id, ...req.body };
  (db.users as any[]).push(newUser);
  res.status(201).json(newUser);
};

let user = [
    { id: 1, name: 'John Doe', email: '', password:'' , userRole: UserRole.DRIVER },
    { id: 2, name: 'Jane Smith', email: '', password:'' , userRole: UserRole.PASSENGER },
];  
   
// llamar todos los transports
router.get('/', (req:any, res:any) => res.json(user));

// llamar un transport por id
router.get('/:id', (req:any, res:any)=> {
    const usert:any = user.find(t => t.id === Number(req.params.id));
    user ? res.json(user) : res.status(404).json({ message: 'transpoprte inexistente' });
});

// Crear un nuevo transport
router.post('/', (req:any, res:any) => {
    const { type, name, capacity } = req.body;
    const id = user.length + 1;
    const newUser = { 
      id, name, email:'' , password:'' , userRole: UserRole.DRIVER || UserRole.PASSENGER 
    };
    user.push(newUser);
    res.status(201).json(newUser);
});

// Actualizar un transport por id
router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = user.findIndex(t => t.id === id);
    if (index !== -1) return res.status(404).json({ message: 'transporte inexistente' });
    user[index] = { ...user[index], ...req.body };
  res.json(user[index]);
});

// Eliminar un transport por id
router.delete('/:id', (req:any, res:any) => {
  user = user.filter(t => t.id !== Number(req.params.id));
  res.json({ message: 'Transporte Eliminado correctamente' });
});




router.get("/", getUsers);
router.post("/", verifyToken, createUser);

export default router;
