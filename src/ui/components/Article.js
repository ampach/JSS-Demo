import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import Heading from 'ui/components/Heading';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../styles/article.css';

const Article = props => (
  <div style={props.style} className="article">
    <Grid>
      <Row>
        <Col lg={12}>
          { /* Example of "falling back" to route field over datasource field. */}
          <Heading params={{ size: props.params.titleSize }} fields={{ text: props.fields.titleText || props.routeFields.titleText }} />
          <hr className={props.params.shade} />
          <RichText field={props.fields.body || props.routeFields.body} />
        </Col>
      </Row>
    </Grid>
  </div>
);

Article.propTypes = {
  style: PropTypes.object,
  params: PropTypes.shape({
    titleSize: PropTypes.number,
    shade: PropTypes.oneOf(['light', 'dark']),
  }),
  fields: PropTypes.shape({
    titleText: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string,
    }),
    body: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string,
    }),
  }),
  routeFields: PropTypes.object,
};

Article.defaultProps = {
  params: {
    titleSize: 1,
    shade: 'light',
  },
};

Article.styles = {
};

export default commonComponent(Article);
