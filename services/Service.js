class Service {
  constructor(repository, serviceFactory) { // service will be added
    this.repository = repository;
    this.serviceFactory = serviceFactory;
  }

  async getAll(params = {}) {
    return this.repository.getAll(params);
  }

  async getById(id) {
    return this.repository.getById(id);
  }

  async insert(insertData) {
    const newObject = await this.repository.insert(insertData);
    return newObject;
  }

  async update(id, updateData) {
    const updatedObject = await this.repository.update(id, updateData);
    return updatedObject;
  }

  async delete(id) {
    await this.repository.delete(id);
  }

  async getByAttribute(query) {
    const data = await this.repository.getByAttribute(query);
    return data;
  }
}

export default Service;
