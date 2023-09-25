import { AxiosResponse } from 'axios';

export default (data: AxiosResponse<any, any>) => {
  const session: any = {
    name: 'Edu',
    accessToken: data.data['access-token'],
  };
  localStorage.setItem('session', JSON.stringify(session));
};
