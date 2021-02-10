import ServiceFactory from '../services/ServiceFactory';
import hotelValidation from '../validations/hotel/hotelValidation';

const sf = new ServiceFactory();

const getAllHotels = async (req) => {
  const service = await sf.getHotelsService();
  let data;
  if (req.query.name || req.query.address) {
    data = await service.searchHotelByAttribute(req.query);
  } else {
    data = await service.getAll({
      orderBy: req.query.orderBy || 'name',
    });
  }
  return data;
};

// const getHotelsByAttr = async (req) => {
//   const service = await sf.getHotelsService();
//   const data = await service.searchHotelByAttribute(req.params);
//   return data;
// };

const createHotel = async (req) => {
  await hotelValidation.validateInsertRequest(req.body);
  const service = await sf.getHotelsService();
  const data = await service.insert(req.body);
  return data;
};

const updateHotel = async (req) => {
  const { id } = req.params;
  await hotelValidation.validateUpdateRequest(id, req.body);
  const service = await sf.getHotelsService();
  const data = await service.update(id, req.body);
  return data;
};

const deleteHotel = async (req) => {
  const { id } = req.params;
  await hotelValidation.validateDeleteRequest(id);
  const service = await sf.getHotelsService();
  await service.delete(id);
  return null;
};

export {
  getAllHotels,
  // getHotelsByAttr,
  createHotel,
  updateHotel,
  deleteHotel,
};
