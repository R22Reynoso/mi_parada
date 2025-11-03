import { Router } from 'express';
import { SyndicateType, SyndicateStatus } from '../enums/enums.global';

const router = Router();

let syndicates = [
    { id: 1, type: SyndicateType.UNION, name: 'Drivers Union', status: SyndicateStatus.ACTIVE },
    { id: 2, type: SyndicateType.ASSOCIATION, name: 'Transport Association', status: SyndicateStatus.INACTIVE },
];

// llamar todos los syndicatos
router.get('/', (req:any, res:any) => res.json(syndicates));

// llamar un syndicato por id
router.get('/:id', (req:any, res:any)=> { 
    const stop:any = syndicates.find(s => s.id === Number(req.params.id));
    stop ? res.json(stop) : res.status(404).json({ message: 'syndicate nun existent' });
});

// Crear un nuevo syndicate
router.post('/', (req:any, res:any) => {
    const { type, name, status } = req.body;
    const id = syndicates.length + 1;
    const newSyndicate = { id, type, name, status};
    syndicates.push(newSyndicate);
    res.status(201).json(newSyndicate);
});

// Actualizar un syndicate por id
router.put('/:id', (req:any, res:any) => {
    const id = Number(req.params.id);
    const index = syndicates.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).json({ message: 'Syndicate not found' });
    syndicates[index] = { ...syndicates[index], ...req.body };
  res.json(syndicates[index]);
});

// Eliminar un syndicate por id
router.delete('/:id', (req:any, res:any) => {
  syndicates = syndicates.filter(s => s.id !== Number(req.params.id));
  res.json({ message: 'Syndicate deleted successfully' });
});

export default router;