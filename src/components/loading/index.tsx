import {motion} from 'framer-motion';
import React from 'react';
import './style.scss';

const Loading = () => {
  return (
    <motion.svg
      version='1.1'
      id='loading'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      enable-background='new 0 0 100 100'
    >
      <path
        d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
    c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'
      >
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          dur='1s'
          from='0 50 50'
          to='-360 50 50'
          repeatCount='indefinite'
        />
      </path>
      <path
        d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
    L82,35.7z'
      >
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          dur='2s'
          from='0 50 50'
          to='360 50 50'
          repeatCount='indefinite'
        />
      </path>
    </motion.svg>
  );
};

export default Loading;
