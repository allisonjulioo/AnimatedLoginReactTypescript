import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Enterprise } from "../../models/classes/enterprise";
import { DispatchProps } from "../../models/interfaces/dispatch";
import { StateProps } from "../../models/interfaces/state";
import { ApplicationState } from "../../store";
import * as EnterprisesActions from "../../store/ducks/enterprises/actions";
import EnterpriseItem from "../EnterpriseItem";

class EnterprisesList extends Component<StateProps & DispatchProps> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
    console.log(this.props);
  }

  render() {
    const { enterprises } = this.props || [new Enterprise()];

    return (
      <ul>
        {enterprises.map((enterprise) => (
          <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  enterprises: state.enterprises.data,
});
 
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(EnterprisesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnterprisesList);
