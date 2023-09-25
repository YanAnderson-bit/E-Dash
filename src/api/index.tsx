import axios, { AxiosResponse } from 'axios';

export default {
  get: (route: string): Promise<AxiosResponse<any, any>> => axios.get(route),
  post: (route: string): Promise<AxiosResponse<any, any>> => axios.post(route),
};
