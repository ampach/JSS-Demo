import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import LinkButton from 'ui/components/LinkButton';

import '../styles/heroImage.css';

const HeroImage = ({ style, fields }) => (
  <div className="hero-image" style={style}>
        <div className={`cover ratio-3-2--mobile ratio-${fields.ratio.value}`} style={{ backgroundImage: `url(${fields.image.value.src})`}}></div>
        <div className="hero-image__caption">
          <h3 dangerouslySetInnerHTML={{ __html: fields.title.editable }} />
          <span dangerouslySetInnerHTML={{ __html: fields.body.editable }} />
          <LinkButton fields={{ link: fields.link || routeFields.link }} />
        </div>
  </div>
);

HeroImage.propTypes = {
  style: PropTypes.object,
  fields: PropTypes.shape({
    image: PropTypes.shape({
      value: PropTypes.shape({
        src: PropTypes.string,
      }),
      editable: PropTypes.string,
    }),
    ratio: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string,
    }),
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string,
    }),
    body: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string,
    }),
    link: PropTypes.shape({
      value: PropTypes.object,
      editable: PropTypes.string,
    })
  }),
  routeFields: PropTypes.object,
};

export default commonComponent(HeroImage);
