require('../styles/DescriptionSection.scss');

import React from 'react';
import PropTypes from 'prop-types';

const DescriptionSection = props => (
  <div className="description-section">
    <h4>{props.heading}</h4>
    <hr />
    {props.setDescriptionHtml ? (
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    ) : (
      <p>{props.description}</p>
    )}
  </div>
);

DescriptionSection.propTypes = {
  heading: PropTypes.string,
  setDescriptionHtml: PropTypes.bool,
  description: PropTypes.string
};

export default DescriptionSection;
