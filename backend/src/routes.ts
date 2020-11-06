import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index_all);
routes.get('/orphanages/:id', OrphanagesController.show_orphanage);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create_orphanage);

export default routes;