import React from 'react';
import {Enterprise} from '../../models/classes/enterprise';

interface OwnProps {
  enterprise: Enterprise;
}

export default function EnterpriseItem({enterprise}: OwnProps) {
  return <li>{enterprise.enterprise_name}</li>;
}
