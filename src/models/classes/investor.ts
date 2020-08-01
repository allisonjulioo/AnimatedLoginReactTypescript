import { Portfolio } from "./portfolio";

export class Investor {
  id?: number;
  investor_name?: string;
  email?: string;
  city?: string;
  country?: string;
  balance?: number;
  photo?: string;
  portfolio?: Portfolio;
}