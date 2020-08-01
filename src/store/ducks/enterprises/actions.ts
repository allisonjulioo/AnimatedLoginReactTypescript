import { action } from 'typesafe-actions';
import { Enterprise } from '../../../models/classes/enterprise';
import { EnterpriseTypes } from '../../../models/types/types';


export const loadRequest = () => action(EnterpriseTypes.REQUEST);

export const loadSuccess = (data: Enterprise[]) => action(EnterpriseTypes.SUCCESS, { data });

export const loadFailure = () => action(EnterpriseTypes.ERROR);