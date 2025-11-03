import { Router } from 'express';
import { verifyFirebaseToken } from '../middleware/auth.firebase';
import {
  listTimes,
  getTime,
  createTime,
  updateTime,
  deleteTime
} from '../controllers/times.controller';

const router = Router();

// Libre acceso
router.get('/', listTimes);
router.get('/:id', getTime);

// Protegido
router.post('/', verifyFirebaseToken, createTime);
router.put('/:id', verifyFirebaseToken, updateTime);
router.delete('/:id', verifyFirebaseToken, deleteTime);

export default router;
