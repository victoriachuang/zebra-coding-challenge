require('../styles/Card.scss');

import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import ActionButton, { noButtonType } from './ActionButton';
import FeaturesListWithDescription from './FeaturesListWithDescription';
import RateWithTag from './RateWithTag';
import { IconStarWhite } from './Icons';

const Card = props => (
  <div className="card flex flex-column">
    {props.topResult && (
      <div className="corner-triangle">
        <IconStarWhite />
      </div>
    )}
    <div className="flex">
      <CardHeader
        name={props.cardData.name}
        stars={props.cardData.stars}
        features={props.cardData.features}
      />
      <div className="flex flex-column">
        <RateWithTag tag={props.cardData.tag} rate={props.cardData.rate} />
        {props.cardData.type !== noButtonType && (
          <ActionButton
            type={props.cardData.type}
            action={props.cardData.action}
          />
        )}
      </div>
    </div>
    <FeaturesListWithDescription
      featuresHtml={props.cardData.features_html}
      name={props.cardData.name}
      detailBody={props.cardData.detail_body}
    />
  </div>
);

Card.propTypes = {
  topResult: PropTypes.bool,
  cardData: PropTypes.shape({
    name: PropTypes.string,
    stars: PropTypes.number,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        group_id: PropTypes.number,
        name: PropTypes.string,
        icon: PropTypes.string
      })
    ),
    tag: PropTypes.string,
    action: PropTypes.shape({
      link: PropTypes.string,
      link_text: PropTypes.string,
      link_copy: PropTypes.string,
      type: PropTypes.string
    }),
    features_html: PropTypes.arrayOf(PropTypes.string),
    detail_body: PropTypes.string
  })
};

export default Card;
