class AuthorizationError extends Error {
  constructor(error) {
    super(error);
    this.error = error;
  }

  getError() {
    return this.error;
  }
}

export default AuthorizationError;
