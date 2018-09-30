require('styles/sharedIconStyles.scss');

import React from 'react';
import PropTypes from 'prop-types';
import { IconStarGold, IconStarWhite } from './Icons';

const StarRating = props => {
  const stars = [];
  const maxStars = 5;
  const { starRating } = props;
  // Start at 1 because the minimum to get a gold star is a rating of 1
  for (let star = 1; star <= maxStars; star++) {
    if (star <= starRating) {
      stars.push(<IconStarGold key={star} />);
    } else {
      // Fill difference between stars and maximum stars with white stars
      stars.push(<IconStarWhite key={star} />);
    }
  }

  return <div className="icons-container stars">{stars}</div>;
};

StarRating.propTypes = {
  starRating: PropTypes.number
};

export default StarRating;
