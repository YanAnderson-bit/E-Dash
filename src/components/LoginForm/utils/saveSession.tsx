import { AxiosResponse } from 'axios';
import { setCookie } from 'nookies';

export default (data: AxiosResponse<any, any>) => {
  const session: any = {
    name: 'Yan',
    accessToken: data.data['access-token'],
  };
  setCookie(null, 'session', JSON.stringify(session));
};
