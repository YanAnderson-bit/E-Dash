import axios, { AxiosResponse } from 'axios';

export default {
  login: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/login'),
  getDailyAverageTicket: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day'),
  getMonthlyAverageTicket: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-month'),
  getAlertProducts: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/alerts'),
  getOrderedProducts: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/orders-month'),
  post: (route: string): Promise<AxiosResponse<any, any>> => axios.post(route),
  getSalesPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month'),
};
