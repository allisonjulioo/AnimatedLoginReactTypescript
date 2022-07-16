import {LocalStorageManager} from '../../utils/local-storage-manager';
export class RequestHeaders extends LocalStorageManager {
  public 'Content-Type': string = 'application/json';
  public 'access-token': string = this.getItem('client')['access-token'];
  public client: string = this.getItem('client').client;
  public uid: string = this.getItem('client').uid;
}
