import axios, { AxiosResponse } from 'axios';

const API_ROUTE: string | undefined = process.env['NEXT_PUBLIC_API_KEY'];

export default {
  login: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/login`),
  getDailyAverageTicket: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/avg-ticket-day`, config),
  getMonthlyAverageTicket: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/avg-ticket-month`, config),
  getAlertProducts: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/alerts`, config),
  getMonthOrderedProducts: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/orders-month`, config),
  getSalesPerMonth: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/sells-per-month`, config),
  getExpectatedProfitPerMonth: (
    config: any
  ): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/profit-expectation-per-month`, config),
  getRealProfitPerMonth: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/profit-per-month`, config),
  getOrdersPerMonth: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/orders-per-month`, config),
  getCanceledOrdersPerMonth: (config: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/canceled-orders-per-month`, config),
  getProductsList: (config: any): Promise<AxiosResponse<any, any>> => {
    console.log(config);
    return axios.get(`${API_ROUTE}/products`, config);
  },
  createProduct: (
    product: any,
    config: any
  ): Promise<AxiosResponse<any, any>> =>
    axios.post(`${API_ROUTE}/create-product`, product, config),
};
