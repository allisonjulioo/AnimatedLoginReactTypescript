import { ContentHeader } from '../../models/interfaces/header';

export class LocalStorageManager {
  public setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  public getItem(key: string): ContentHeader {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
