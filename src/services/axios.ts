import axios, { AxiosInstance } from 'axios';

export class Axios {
  public url: string = 'users/allisonjulioo/repos';
  public api: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
  })
} 