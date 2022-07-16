import {IProps} from 'models/interfaces/button';
import React from 'react';
import './style.scss';

const Button = ({children, active = true, onClick, ...props}: IProps) => (
  <div id='container'>
    <button
      id='button'
      {...props}
      className={(active && 'active') || ''}
      disabled={!active}
    >
      <small className='children' onClick={() => onClick}>
        {children}
      </small>
      <samp></samp>
      <samp></samp>
      <samp></samp>
      <samp></samp>
    </button>
  </div>
);

export default Button;
