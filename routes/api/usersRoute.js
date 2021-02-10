import express from 'express';
import { createUser, userLogin, getAllUsers } from '../../controllers/usersController';
import controllerWrapper from '../../helpers/controllerWrapper';
import { requireLogin, requireAuth } from '../../auth/passportService';
import validateRoles from '../../middlewares/validateRoles';
import USER_ROLES from '../../constants/userConstants';

const router = express.Router();

router.route('/users')
  .post(controllerWrapper(createUser));

router.route('/login')
  .post(requireLogin, controllerWrapper(userLogin));

router.route('/users')
  .get(requireAuth, validateRoles(USER_ROLES.Admin), (req, res) => res.send('SUCCESS'));

router.route('/paging')
  .get(controllerWrapper(getAllUsers));

export default router;
