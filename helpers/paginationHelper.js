import config from '../config';

const getPagination = (page) => {
  const limit = config.pageSize;
  const offset = page ? ((page - 1) * limit) : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: documents } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems, documents, totalPages, currentPage,
  };
};

export {
  getPagination,
  getPagingData,
};
