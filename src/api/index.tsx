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
  getMonthOrderedProducts: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/orders-month'),

  getSalesPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month'),
  getExpectatedProfitPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(
      'https://628bf017667aea3a3e387e51.mockapi.io/profit-expectation-per-month'
    ),
  getRealProfitPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/profit-per-month'),
  getOrdersPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/orders-per-month'),
  getCanceledOrdersPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(
      'https://628bf017667aea3a3e387e51.mockapi.io/canceled-orders-per-month'
    ),
  createProduct: (product: any): Promise<AxiosResponse<any, any>> =>
    axios.post(
      'https://628bf017667aea3a3e387e51.mockapi.io/create-product',
      product
    ),
};
