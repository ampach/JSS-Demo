import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commonContainer } from 'enhancers';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'ui/components/LoadingIndicator';
import * as actions from './actions';

import './footerNav.css';

class FooterNav extends Component {
  componentDidMount() {
   this.props.actions.fetchData('/content/footer', this.props.currentLang)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentLang !== this.props.currentLang) // Check if it's a new user, you can also use some unique, like the ID
    {
      this.props.actions.fetchData('/content/footer', nextProps.currentLang)
    }
  }

  render() {
    {
      if (this.props.loading === true) {
        return (
            <Grid>
                <Row>
                    <Col lg={12} className="text-center">
                      <LoadingIndicator size={32} />
                    </Col>
                </Row>
            </Grid>
        );
      } else {
        return (
            <Grid className="footer-nav">
              <Row>
                  <Col lg={12} className="text-center">
                    <h2>Quick links</h2>
                  </Col>
                  {this.props.data.footerLinks.map((item, index) =>
                    <Col lg={4} xs={6} key={index} className="text-center footer-nav__link">
                      <a href={item.path}>{item.name}</a>
                    </Col>
                  )}
              </Row>
            </Grid>
        );
      }
    }

  }
}

FooterNav.propTypes = {
  style: PropTypes.object,
  actions: PropTypes.object, /* eslint react/no-unused-prop-types: 0 */
  data: PropTypes.object,
  t: PropTypes.func,
  loading: PropTypes.bool,
  currentLang: PropTypes.string,
};

FooterNav.styles = {

};

const mapStateToProps = state => ({
  loading: state.footerNav.loading,
  data: state.footerNav.data,
  currentLang: state.app.currentLang,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default translate()(connect(mapStateToProps, mapDispatchToProps)(commonContainer(FooterNav)));
