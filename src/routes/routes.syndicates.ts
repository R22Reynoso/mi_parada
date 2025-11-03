/*import { Router } from 'express';
import { verifyFirebaseToken } from '../config/firebase';
import { listSyndicates, getSyndicate, createSyndicate, updateSyndicate, deleteSyndicate } from '../controllers/controller.syndicate';

const router = Router();

// Público: GET
router.get('/', listSyndicates);
router.get('/:id', getSyndicate);

// Privado: POST, PUT, DELETE
router.post('/', verifyFirebaseToken, createSyndicate);
router.put('/:id', verifyFirebaseToken, updateSyndicate);
router.delete('/:id', verifyFirebaseToken, deleteSyndicate);

export default router;*/
