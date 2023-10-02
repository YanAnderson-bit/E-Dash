import { AxiosResponse } from 'axios';
import nookies, { setCookie } from 'nookies';

export default (data: AxiosResponse<any, any>) => {
  const session: any = {
    name: 'Yan',
    accessToken: data.data['access-token'],
  };
  nookies.set(null, 'session', JSON.stringify(session));
  setCookie(null, 'session', JSON.stringify(session));
};
