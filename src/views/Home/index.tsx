import React, { Component } from "react";
import { DispatchProps } from "../../models/interfaces/dispatch";
import { StateProps } from "../../models/interfaces/state";
import "./style.scss";

export class Home extends Component<StateProps & DispatchProps> {
  componentDidMount() {}
  render() {
    const { enterprises } = this.props;
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
