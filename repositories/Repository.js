import { getPagination, getPagingData } from '../helpers/paginationHelper';

class Repository {
  constructor(model) {
    this.model = model;
  }

  async getAll(params = null) {
    const orderBy = params && params.orderBy ? params.orderBy : 'createdAt';
    const orderType = orderBy && params.orderType ? params.orderType : 'ASC';
    const page = params && params.page ? +params.page : 1;

    const { limit, offset } = getPagination(page);
    const data = await this.model.findAndCountAll({
      limit,
      offset,
      order: [[orderBy, orderType]],
    });
    const pagingData = getPagingData(data, page, limit);
    return pagingData;
  }

  async getById(id) {
    const data = await this.model.findByPk(id);
    return data;
  }

  async insert(insertData) {
    const data = await this.model.create(insertData);
    return data;
  }

  async update(id, updateData) {
    const data = await this.model.update(updateData, { where: { id } });
    return data;
  }

  async delete(id) {
    const data = await this.model.destroy({ where: { id } });
    return data;
  }

  async getByAttribute(conditionQuery) {
    const data = await this.model.findAll({
      where: conditionQuery,
    });
    return data;
  }
}

export default Repository;
