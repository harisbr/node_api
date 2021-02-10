// import Service from './Service';
import UnitOfWork from '../repositories/UnitOfWork';
import UserService from './UserService';
import HotelService from './HotelService';

class ServiceFactory {
  constructor() {
    this.uow = null;
  }

  async createUnitOfWork() {
    if (!this.uow) {
      this.uow = await UnitOfWork.getInstance();
    }
  }

  async getUsersService() {
    if (!this.userService) {
      await this.createUnitOfWork();
      this.userService = new UserService(
        this.uow.getUsersRepository(),
        this,
      );
    }
    return this.userService;
  }

  async getHotelsService() {
    if (!this.hotelService) {
      await this.createUnitOfWork();
      this.hotelService = new HotelService(
        this.uow.getHotelsRepository(),
        this,
      );
    }
    return this.hotelService;
  }
}

export default ServiceFactory;
