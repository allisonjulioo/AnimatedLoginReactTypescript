import React from "react";
import { IProps } from "../../models/interfaces/button";
import "./style.scss";

export default ({ children, active = true, onClick, ...props }: IProps) => (
  <div id="container">
    <button
      id="button"
      {...props}
      className={(active && "active") || ""}
      disabled={!active}
    >
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
