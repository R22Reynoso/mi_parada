import { Router } from 'express';
import { StopType, StopStatus } from '../enums/enums.global';

const router = Router();

let stops = [
    { id: 1, type: StopType.BUS_STOP, name: 'Main St & 1st Ave', status: StopStatus.OPERATIONAL },
    { id: 2, type: StopType.TRAIN_STATION, name: 'Central Station', status: StopStatus.CLOSED },
];

// llamar todas las paradas stops
router.get('/', (req:any, res:any) => res.json(stops));

//llamar una parada por id
router.get('/:id', (req:any, res:any)=> { 
    const stop:any = stops.find(s => s.id === Number(req.params.id));
    stop ? res.json(stop) : res.status(404).json({ message: 'Stop not found' });
});

// Crear una nueva parada 
router.post('/', (req:any, res:any) => {
    const { type, name, status } = req.body;
    const id = stops.length + 1;
    const newStop = { id, type, name, status};
    stops.push(newStop);
    res.status(201).json(newStop);
});

// Actualizar una parada por id
router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = stops.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).json({ message: 'Stop not found' });
    stops[index] = { ...stops[index], ...req.body };
  res.json(stops[index]);
});

// Eliminar una parada por id
router.delete('/:id', (req:any, res:any) => {
  stops = stops.filter(s => s.id !== Number(req.params.id));
  res.json({ message: 'Stop deleted successfully' });
});

export default router;