import {Router} from 'express';
import { TransportType, TransportStatus, TimeStatus } from '../enums/enums.global';
import { time } from 'console';
import { AnyOfSchema } from 'firebase/ai';

const router:any = Router();


let transports = [
    { id: 1, type: TransportType.PUBLIC, name: 'Bus', capacity: 50, status: TransportStatus.ACTIVE, timeStatus: TimeStatus.ON_TIME },
    { id: 2, type: TransportType.PRIVATE, name: 'Taxi', capacity: 4, status: TransportStatus.ACTIVE, timeStatus: TimeStatus.DELAYED },
    { id: 3, type: TransportType.PUBLIC, name: 'Train', capacity: 200, status: TransportStatus.INACTIVE, timeStatus: TimeStatus.ON_TIME},
];    
   
// llamar todos los transports
router.get('/', (req:any, res:any) => res.json(transports));

// llamar un transport por id
router.get('/:id', (req:any, res:any)=> {
    const transport:any = transports.find(t => t.id === Number(req.params.id));
    transport ? res.json(transport) : res.status(404).json({ message: 'transpoprte inexistente' });
});

// Crear un nuevo transport
router.post('/', (req:any, res:any) => {
    const { type, name, capacity } = req.body;
    const id = transports.length + 1;
    const newTransport = { 
      id, type, name, capacity, status: TransportStatus.ACTIVE || TransportStatus.INACTIVE, timeStatus: TimeStatus.ON_TIME || TimeStatus.DELAYED
    };
    transports.push(newTransport);
    res.status(201).json(newTransport);
});

// Actualizar un transport por id
router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = transports.findIndex(t => t.id === id);
    if (index !== -1) return res.status(404).json({ message: 'transporte inexistente' });
    transports[index] = { ...transports[index], ...req.body };
  res.json(transports[index]);
});

// Eliminar un transport por id
router.delete('/:id', (req:any, res:any) => {
  transports = transports.filter(t => t.id !== Number(req.params.id));
  res.json({ message: 'Transporte Eliminado correctamente' });
});

export default router;