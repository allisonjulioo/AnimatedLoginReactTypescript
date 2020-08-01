import axios, { AxiosInstance } from 'axios';
import { User } from '../../models/classes/user';
import { RequestAuth } from '../../models/enum/request-auth';

export class AuthService extends User {
  public api: AxiosInstance = axios.create({
    baseURL: this.base_sign_in,
    data: RequestAuth
  })
} 