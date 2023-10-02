import axios, { AxiosResponse } from 'axios';

const API_ROUTE: string | undefined = process.env['NEXT_PUBLIC_API_KEY'];

export default {
  login: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/login`),
  getDailyAverageTicket: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/avg-ticket-day`),
  getMonthlyAverageTicket: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/avg-ticket-month`),
  getAlertProducts: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/alerts`),
  getMonthOrderedProducts: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/orders-month`),
  getSalesPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/sells-per-month`),
  getExpectatedProfitPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/profit-expectation-per-month`),
  getRealProfitPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/profit-per-month`),
  getOrdersPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/orders-per-month`),
  getCanceledOrdersPerMonth: (): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/canceled-orders-per-month`),
  getProductsList: (query: any): Promise<AxiosResponse<any, any>> =>
    axios.get(`${API_ROUTE}/products`, {
      params: query,
    }),
  createProduct: (product: any): Promise<AxiosResponse<any, any>> =>
    axios.post(`${API_ROUTE}/create-product`, product),
};
