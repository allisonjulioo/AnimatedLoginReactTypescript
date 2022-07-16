import {DispatchProps} from 'models/interfaces/dispatch';
import {StateProps} from 'models/interfaces/state';
import React, {Component} from 'react';
import './style.scss';

export class Home extends Component<StateProps & DispatchProps> {
  componentDidMount() {}
  render() {
    const {enterprises} = this.props;

    return (
      <div>
        {enterprises?.map((item, key) => (
          <span key={key}>{item.facebook}</span>
        ))}
      </div>
    );
  }
}
