import { Router } from 'express';
import summaryRouter from './summary_routes';

const router = Router();

router.use('/summary', summaryRouter);

export default router;
