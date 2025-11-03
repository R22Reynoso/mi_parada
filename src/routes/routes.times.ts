import { Router } from 'express';
import { Request, Response } from "express";
import { db } from "../config/db";
import { TransportStatus,TransportType, TimeStatus } from '../enums/enums.global';
import { time } from 'console';
import { AnyOfSchema } from 'firebase/ai';

export const getTimes = (req: Request, res: Response) => {
  res.json(db.times);
};

export const createTimes = (req: Request, res: Response) => {
  const id = db.times.length + 1;
  const newTimes = { id, ...req.body };
  (db.times as Date[]).push(newTimes);
  res.status(201).json(newTimes);
};


const router = Router();


let times = [
   { id: 1, type: TransportType.PUBLIC, name: 'Bus', capacity: 50, status: TransportStatus.ACTIVE, timeStatus: TimeStatus.ON_TIME },
      { id: 2, type: TransportType.PRIVATE, name: 'Taxi', capacity: 4, status: TransportStatus.ACTIVE, timeStatus: TimeStatus.DELAYED },
      { id: 3, type: TransportType.PUBLIC, name: 'Train', capacity: 200, status: TransportStatus.INACTIVE, timeStatus: TimeStatus.ON_TIME},
];
   
// llamar todos los transports
router.get('/', (req:any, res:any) => res.json(times));

// llamar un tiempo por id
router.get('/:id', (req:any, res:any)=> {
    const transport:any = times.find(t => t.id === Number(req.params.id));
    transport ? res.json(transport) : res.status(404).json({ message: 'tiempos no medido' });
});

// Crear un nuevo transport
router.post('/', (req:any, res:any) => {
    const { type, name, timeStatus } = req.body;
    const id = times.length + 1;
    const newTime = { 
      id, type, name, timeStatus, status: TransportStatus.ACTIVE || TransportStatus.INACTIVE
    };
   
});

// Actualizar un transport por id
router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = times.findIndex(t => t.id === id);
    if (index !== -1) return res.status(404).json({ message: 'timepo de transporte actualizado' });
    times[index] = { ...times[index], ...req.body };
  res.json(times[index]);
});

// Eliminar un transport por id
router.delete('/:id', (req:any, res:any) => {
  times = times.filter(t => t.id !== Number(req.params.id));
  res.json({ message: 'Tiempo Eliminado correctamente' });
});

export default router;
