import {Enterprise} from '../classes/enterprise';

export interface EnterprisesState {
  readonly data: Enterprise[];
  readonly loading: boolean;
  readonly error: boolean;
}
