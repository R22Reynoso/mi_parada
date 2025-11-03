import { Router } from 'express';
import { verifyFirebaseToken } from '../middleware/auth.firebase';
import {
  listStops,
  getStop,
  createStop,
  updateStop,
  deleteStop
} from '../controllers/stops.controller';

const router = Router();

// Lectura pública
router.get('/', listStops);
router.get('/:id', getStop);

// Mutaciones solo con token
router.post('/', verifyFirebaseToken, createStop);
router.put('/:id', verifyFirebaseToken, updateStop);
router.delete('/:id', verifyFirebaseToken, deleteStop);

export default router;
