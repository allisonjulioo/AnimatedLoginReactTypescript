import React from "react";
import { IProps } from "../../models/interfaces/button";
import "./style.scss";

export default ({ children, onClick, ...props }: IProps) => (
  <div id="container">
    <button id="button" {...props}>
      <small className="children" onClick={(event) => onClick}>
        {children}
      </small>
      <samp></samp>
      <samp></samp>
      <samp></samp>
      <samp></samp>
    </button>
  </div>
);
