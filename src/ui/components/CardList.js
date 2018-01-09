import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../styles/cardList.css'

const CardList = ({ style, rendering, ...otherProps }) => (
   <div className="card-list">
       <Grid style={style} fluid={true}>
          <Row>
            <Col md={6} className="card-list__item">
                <Placeholder name="left" rendering={rendering} {...otherProps} />
            </Col>
            <Col md={6} className="card-list__item">
                <Placeholder name="right" rendering={rendering} {...otherProps} />
            </Col>
          </Row>
       </Grid>
   </div>
);

CardList.propTypes = {
  style: PropTypes.object,
  rendering: PropTypes.object,
};

export default commonComponent(CardList);
