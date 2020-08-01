import axios, { AxiosInstance } from 'axios';
import { User } from '../../models/classes/user';

export class AuthService extends User {
  public api: AxiosInstance = axios.create({
    baseURL: this.base_sign_in,
    headers: {
      'Content-Type': 'application/json'
    }
  })
} 