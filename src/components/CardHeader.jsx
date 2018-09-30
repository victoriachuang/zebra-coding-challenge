require('../styles/CardHeader.scss');

import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import FeatureIcons from './FeatureIcons';

const CardHeader = props => (
  <div className="header-container">
    <img className="logo" src="../images/logo-carrier-sm-default.png" />
    <div className="info-container">
      <h3 className="carrier-name">{props.name}</h3>
      <div className="icons-wrapper">
        <StarRating starRating={props.stars} />
        {props.features && <FeatureIcons features={props.features} />}
      </div>
    </div>
  </div>
);

CardHeader.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.number,
      name: PropTypes.string,
      icon: PropTypes.string
    })
  )
};

export default CardHeader;
