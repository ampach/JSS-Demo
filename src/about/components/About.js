import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const About = ({ style, rendering, ...otherProps }) => (
<section className="about-container" style={style}>
    <div className="page-header">
    <Placeholder name="page-header" rendering={rendering} {...otherProps} />
</div>
<div className="page-content">
    <Placeholder name="page-content" rendering={rendering} {...otherProps} />
</div>
</section>
);

About.propTypes = {
  style: PropTypes.object,
  loading: PropTypes.bool,
  rendering: PropTypes.object,
};

export default commonComponent(About);
