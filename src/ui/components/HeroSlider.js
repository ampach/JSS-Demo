import React from 'react';
import PropTypes from 'prop-types';
import { commonComponent } from 'enhancers';
import LinkButton from 'ui/components/LinkButton';

import { Carousel as BootCarousel } from 'react-bootstrap';

import '../styles/heroSlider.css';
import '../styles/heroImage.css';

const HeroSlider = ({ style, fields }) => (
  <BootCarousel style={style} className="hero-slider" indicators={false}>
    {
      fields.items.map((item, index) => (
        <BootCarousel.Item key={`carouselItem${index}`}>
          <div className="hero-image" style={style}>
              <div className={`cover ratio-3-2--mobile ratio-${item.fields.ratio.value}`} style={{ backgroundImage: `url(${item.fields.image.value.src})`}}></div>
              <div className="hero-image__caption">
                  <h3 dangerouslySetInnerHTML={{ __html: item.fields.title.editable }} />
                  <span dangerouslySetInnerHTML={{ __html: item.fields.body.editable }} />
                  <LinkButton fields={{ link: item.fields.link }} />
              </div>
          </div>
        </BootCarousel.Item>
      ))
    }
  </BootCarousel>
);

HeroSlider.propTypes = {
  style: PropTypes.object,
  fields: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })),
  }),
};

HeroSlider.displayName = 'HeroSlider';

export default commonComponent(HeroSlider);
