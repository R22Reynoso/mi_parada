import {Router} from 'express';
import { TransportType } from '../enums/enums.transportType';

const router:any = Router();

let transports = [
    { id: 1, type: TransportType.PUBLIC, name: 'Bus', capacity: 50 },
    { id: 2, type: TransportType.PRIVATE, name: 'Taxi', capacity: 4 },
];    
// llamar todos los transports
router.get('/', (req:any, res:any) => res.json(transports));
// llamar un transport por id
router.get('/:id', (req:any, res:any)=> {
    const transport:any = transports.find(t => t.id === Number(req.params.id));
    transport ? res.json(transport) : res.status(404).json({ message: 'transpoprte inexistente' });
});

router.post('/', (req:any, res:any) => {
    const { type, name, capacity } = req.body;
    const id = transports.length + 1;
    const newTransport = { id, type, name, capacity};
    transports.push(newTransport);
    res.status(201).json(newTransport);
});


router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = transports.findIndex(t => t.id === id);
    if (index !== -1) return res.status(404).json({ message: 'transporte inexistente' });
    transports[index] = { ...transports[index], ...req.body };
  res.json(transports[index]);
});

router.delete('/:id', (req:any, res:any) => {
  transports = transports.filter(t => t.id !== Number(req.params.id));
  res.json({ message: 'Transporte Eliminado correctamente' });
});

export default router;