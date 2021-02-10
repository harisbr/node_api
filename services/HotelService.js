import { Op } from 'sequelize';
import Service from './Service';

class HotelService extends Service {
  async searchHotelByAttribute(queryParams) {
    const hotelName = queryParams && queryParams.name ? queryParams.name : null;
    const hotelAddress = queryParams && queryParams.address ? queryParams.address : null;

    let condition = {};
    if (hotelName) {
      condition = {
        name: { [Op.like]: `%${hotelName}%` },
      };
    }
    if (hotelAddress) {
      condition = {
        ...condition,
        address: { [Op.like]: `%${hotelAddress}%` },
      };
    }

    const data = await super.getByAttribute(condition);
    return data;
  }
}

export default HotelService;
