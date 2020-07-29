import React, { Component } from "react";
import RepositoryItem from "../../components/RepositoryItem";
import { DispatchProps } from "../../models/interfaces/dispatch";
import { StateProps } from "../../models/interfaces/state";

type Props = StateProps & DispatchProps;

class Auth extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}
