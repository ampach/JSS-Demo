import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import { translate } from 'react-i18next';
import { Grid, Row, Col } from 'react-bootstrap';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Private = ({ style, rendering, t, user,  ...otherProps }) => (
    <section className="private-container" style={style}>
            <div className="page-header">
                <Placeholder name="page-header" rendering={rendering} {...otherProps} /> :
            </div>
            <div className="page-content">
                {
                    user ?
                        <Placeholder name="page-content" rendering={rendering} {...otherProps} /> :
                        <div className="article">
                            <Grid>
                                <Row>
                                    <Col lg={12}>
                                        <h2>{t('PrivateAreaNotice')}</h2>
                                    </Col>
                                    <Col lg={12}>
                                        <img className="restricted-icon" alt="restricted" src="/assets/img/restricted.png" />
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                }
            </div>
    </section>
);

Private.propTypes = {
  style: PropTypes.object,
  loading: PropTypes.bool,
  rendering: PropTypes.object,
  user: PropTypes.object
};

export default translate()(commonComponent(Private));
