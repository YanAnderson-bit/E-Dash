import axios, { AxiosResponse } from 'axios';

export default {
  login: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/login'),
  post: (route: string): Promise<AxiosResponse<any, any>> => axios.post(route),
};
