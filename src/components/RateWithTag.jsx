require('../styles/RateWithTag.scss');

import React from 'react';
import PropTypes from 'prop-types';

const RateWithTag = props => (
  <div className="rate-tag-container">
    {props.tag && <p className="tag">{props.tag}</p>}
    {props.rate && (
      <h4 className="rate">
        <span>$</span> <span className="price">{Math.round(props.rate)}</span>{' '}
        <span className="term">/ mo</span>
      </h4>
    )}
  </div>
);

RateWithTag.propTypes = {
  tag: PropTypes.string,
  rate: PropTypes.number
};

export default RateWithTag;
