import { Router } from "express";
import * as MainController from '../controllers/MainController';

const router = Router();

router.get('/', MainController.index);

export default router;