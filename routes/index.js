import express from 'express';
import usersRoutes from './api/usersRoute';
import hotelsRoutes from './api/hotelsRoute';

const router = express.Router();

router.use('/api', usersRoutes);
router.use('/api', hotelsRoutes);

export default router;
