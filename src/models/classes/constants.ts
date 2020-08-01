export class Constants {
  public base_enterprises: string;
  public base_sign_in: string;
  constructor() {
    this.base_enterprises = "https://empresas.ioasys.com.br/api/v1/enterprises";
    this.base_sign_in = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in';
  }
}