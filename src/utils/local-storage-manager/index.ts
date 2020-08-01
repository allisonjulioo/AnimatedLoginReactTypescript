import { ContentHeader } from "../../models/interfaces/header";

export class LocalStorageManager {
  public setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  public getItem(key: string): ContentHeader {
    return JSON.parse(localStorage.getItem(key) || '');
  }
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}