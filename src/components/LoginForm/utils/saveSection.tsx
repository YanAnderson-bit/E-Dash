import { AxiosResponse } from 'axios';

export default (data: AxiosResponse<any, any>) => {
  const section: any = {
    name: 'Edu',
    accessToken: data.data['access-token'],
  };
  localStorage.setItem('section', section);
};
