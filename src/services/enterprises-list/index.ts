import axios, {AxiosInstance} from 'axios';
import {Enterprise} from 'models/classes/enterprise';
import {RequestHeaders} from 'models/enum/request-headers';

export class EnterpriseService extends Enterprise {
  private contentHeader: RequestHeaders = new RequestHeaders();
  public api: AxiosInstance = axios.create({
    baseURL: this.base_enterprises,
    headers: this.contentHeader,
  });
}
