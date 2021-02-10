import express from 'express';
import controllerWrapper from '../../helpers/controllerWrapper';
import {
  getAllHotels,
  // getHotelsByAttr,
  createHotel,
  updateHotel,
  deleteHotel,
} from '../../controllers/hotelsController';

const router = express.Router();

router.route('/hotels')
  .get(controllerWrapper(getAllHotels))
  .post(controllerWrapper(createHotel));

// router.route('/hotels/:name/:address')
//   .get(controllerWrapper(getHotelsByAttr));

router.route('/hotels/:id')
  .put(controllerWrapper(updateHotel))
  .delete(controllerWrapper(deleteHotel));

export default router;
