import { action } from 'typesafe-actions';
import { Enterprise } from '../../../models/classes/enterprise';
import { EnterpriseTypes } from '../../../models/types/types';


export const getListEnterprises = () => action(EnterpriseTypes.REQUEST);

export const onSuccess = (data: Enterprise[]) => action(EnterpriseTypes.SUCCESS, { data });

export const onError = () => action(EnterpriseTypes.ERROR);