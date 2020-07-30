import React from "react";
import { IProps } from "../../models/interfaces/props";
import "./style.scss";

export default ({ children, ...props }: IProps) => (
  <button id="button">
    <span>{children}</span>
  </button>
);
