import { validate, validateObjectId } from '../helpers/validateHelper';
import ValidationError from '../helpers/ValidationError';

class Validation {
  constructor(schema, entityName) {
    this.schema = schema;
    this.entityName = entityName;
  }

  async validateGetByIdRequest(id) {
    if (!validateObjectId(id)) {
      throw new ValidationError({ message: `${this.entityName} Id not valid` });
    }
  }

  async validateInsertRequest(insertRequest) {
    validate(insertRequest, this.schema.insertSchema);
  }

  async validateUpdateRequest(id, updateRequest) {
    if (!validateObjectId(id)) {
      throw new ValidationError({ message: `${this.entityName} Id not valid` });
    }
    validate(updateRequest, this.schema.updateSchema);
  }

  async validateDeleteRequest(id) {
    if (!validateObjectId(id)) {
      throw new ValidationError({ message: `${this.entityName} Id not valid` });
    }
  }
}

export default Validation;
