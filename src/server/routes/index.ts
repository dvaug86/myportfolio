import { Router } from 'express';
import summaryRouter from './summary_routes';
import contactRouter from './mailgun_routes'
// import apiRouter from './api';
// import authRouter from './auth';

const router = Router();

// router.use('/api', apiRouter);
// router.use('/auth', authRouter);
router.use('/contact', contactRouter);
router.use('/summary', summaryRouter);

export default router;
