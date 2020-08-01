import React, { Component } from "react";
import { Enterprise } from "./models/classes/enterprise";
import { DispatchProps } from "./models/interfaces/dispatch";
import { StateProps } from "./models/interfaces/state";
import store from "./store";
import { loadRequest } from "./store/ducks/enterprises/actions";
import { Auth } from "./views/Auth";
// const App = ;

export default class App extends Component {
  public enterprises: Enterprise[];
  constructor(props: StateProps & DispatchProps) {
    super(props);
    this.enterprises = props.enterprises;
  }
  componentDidMount() {}
  render() {
    return (
      <Auth
        loadRequest={() => store.dispatch(loadRequest())}
        enterprises={this.enterprises}
      />
    );
  }
}
