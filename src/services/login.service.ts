import {default as axios} from 'axios';
import env from '../env';

interface InLoginOrRegister {
  phone: string;
  isDriver: boolean;
}
export const loginOrRegister = async (
  payload: InLoginOrRegister,
): Promise<{status: number; data: any}> => {
  console.log('THIS TEH PAYLOAD => ', payload);
  return axios
    .post(`${env.url}/auth/auth`, payload)
    .then(r => ({status: r.status, data: r.data}))
    .catch(e => {
      console.log('error => ', e);
      return {status: e.status, data: e.data};
    });
};

interface InCodeVerify {
  verificationCode: string;
  phone: string;
}
export const validateInUserODriver = async (payload: InCodeVerify) => {
  console.log('THIS TEH PAYLOAD => ', payload);
  return axios
    .post(`${env.url}/auth/login`, payload)
    .then(r => ({status: r.status, data: r.data}))
    .catch(e => {
      console.log('error => ', e.data.message);
      return {status: e.status, data: e.data};
    });
};
