import { axiosInstance } from "./axios-instance";

const getManyComments = {
  url: 'comments',
  async request(
    query,
    config,
  ) {
    return axiosInstance.get(this.url, {
      params: {
        _order: 'desc',
        _sort: 'id',
        query
      },
      ...config
    });
  },
};

const addComments = {
  url: 'comments',
  async request(
    body,
  ) {
    return axiosInstance.post(this.url, body);
  },
};

const updateComments = {
  url: (id) => `comments/${id}`,
  async request(
    params,
    body,
  ) {
    return axiosInstance.patch(this.url(params.id), body);
  },
};

const deleteComments = {
  url: (id) => `comments/${id}`,
  async request(
    params,
    config
  ) {
    return axiosInstance.delete(this.url(params.id), config);
  },
};

export const Api = {
  getManyComments,
  addComments,
  updateComments,
  deleteComments
};