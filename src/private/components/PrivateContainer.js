import { connect } from 'react-redux';
import { commonContainer } from 'enhancers';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Private from './Private';

const mapStateToProps = (state, ownProps) => ({
  loading: state.about.loading,
  rendering: ownProps.rendering,
  user: state.sitecore.context.user,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const mergeProps = (stateProps, dispatchProps) => {
  const { actions: stateActions, ...otherStateProps } = stateProps;
  const { actions: dispatchActions, ...otherDispatchProps } = dispatchProps;
  const mergedActions = Object.assign({}, stateActions, dispatchActions);
  const mergedProps = { ...otherStateProps, ...otherDispatchProps, actions: mergedActions };
  return mergedProps;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(commonContainer(Private));
