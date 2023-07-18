import express from 'express';
import { 
    createZonificacionVB, deleteZonificacionVB, 
    filterZonificacionVBByIdCreator, 
    getAllZonificacionVB, getZonificacionVB, updateZonificacionVB
} from '../controllers/zonificacionVBController.js';


const router = express.Router();

router.get('/', getAllZonificacionVB);
router.get('/getZonificacionByIdCreator/:idCreador', filterZonificacionVBByIdCreator);
router.post('/new', createZonificacionVB);
router.put('/:id', updateZonificacionVB);
router.delete('/:id', deleteZonificacionVB);
router.get('/:id', getZonificacionVB);



export default router;