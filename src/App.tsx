import React, {Component} from 'react';
import {Enterprise} from './models/classes/enterprise';
import {DispatchProps} from './models/interfaces/dispatch';
import {StateProps} from './models/interfaces/state';
import store from './store';
import {getListEnterprises} from './store/ducks/enterprises/actions';
import {Auth} from './views/Auth';
import {Home} from './views/Home';

export default class App extends Component<any> {
  public enterprises: Enterprise[];
  isAuthenticated = true;
  constructor(props: StateProps & DispatchProps) {
    super(props);
    this.enterprises = props.enterprises;
  }
  componentDidMount() {
    this.getProps();
  }

  private getProps() {
    store.dispatch(getListEnterprises());
  }
  render() {
    if (this.isAuthenticated) return <Auth />;
    return (
      <Home
        getListEnterprises={() => this.getProps()}
        enterprises={this.enterprises}
      />
    );
  }
}
