import {Constants} from './constants';
import {Investor} from './investor';

export class User extends Constants {
  investor?: Investor;
  portfolio_value?: number;
  first_access?: boolean;
  super_angel?: boolean;
  enterprise?: any;
  success?: boolean;
}
