import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Page = props => (
  <div style={props.style}>
    <Placeholder
      name="main"
      rendering={props.rendering}
      routeFields={props.routeFields}
      actions={props.actions}
      sitecoreContext={props.sitecoreContext}
    />
  </div>
);

Page.propTypes = {
  style: PropTypes.object,
  rendering: PropTypes.object,
  actions: PropTypes.object,
  routeFields: PropTypes.object,
  sitecoreContext: PropTypes.object,
};

Page.styles = {
};

export default commonComponent(Page);
