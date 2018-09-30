require('styles/sharedIconStyles.scss');

import React from 'react';
import PropTypes from 'prop-types';
import {
  IconFeatures247Support,
  IconFeaturesAutomaticPayment,
  IconFeaturesBuyOnline,
  IconFeaturesCreditCard,
  IconFeaturesDriverExclusion,
  IconFeaturesImmediateCoverage,
  IconFeaturesLocalAgent,
  IconFeaturesLowDownPayment,
  IconFeaturesMobile,
  IconFeaturesNewCarReplacement,
  IconFeaturesNoCreditCheck,
  IconFeaturesNonOwner,
  IconFeaturesOnlineIdCards,
  IconFeaturesOnlineServicing,
  IconFeaturesPaperless,
  IconFeaturesRateLock,
  IconFeaturesRentersBundle,
  IconFeaturesRideshare,
  IconFeaturesRoadside
} from './Icons';

const getIcon = (iconName, key) => {
  switch (iconName) {
    case 'IconFeatures247Support':
      return <IconFeatures247Support key={key} />;
    case 'IconFeaturesAutomaticPayment':
      return <IconFeaturesAutomaticPayment key={key} />;
    case 'IconFeaturesBuyOnline':
      return <IconFeaturesBuyOnline key={key} />;
    case 'IconFeaturesCreditCard':
      return <IconFeaturesCreditCard key={key} />;
    case 'IconFeaturesDriverExclusion':
      return <IconFeaturesDriverExclusion key={key} />;
    case 'IconFeaturesImmediateCoverage':
      return <IconFeaturesImmediateCoverage key={key} />;
    case 'IconFeaturesLocalAgent':
      return <IconFeaturesLocalAgent key={key} />;
    case 'IconFeaturesLowDownPayment':
      return <IconFeaturesLowDownPayment key={key} />;
    case 'IconFeaturesMobile':
      return <IconFeaturesMobile key={key} />;
    case 'IconFeaturesNewCarReplacement':
      return <IconFeaturesNewCarReplacement key={key} />;
    case 'IconFeaturesNoCreditCheck':
      return <IconFeaturesNoCreditCheck key={key} />;
    case 'IconFeaturesNonOwner':
      return <IconFeaturesNonOwner key={key} />;
    case 'IconFeaturesOnlineIdCards':
      return <IconFeaturesOnlineIdCards key={key} />;
    case 'IconFeaturesOnlineServicing':
      return <IconFeaturesOnlineServicing key={key} />;
    case 'IconFeaturesPaperless':
      return <IconFeaturesPaperless key={key} />;
    case 'IconFeaturesRateLock':
      return <IconFeaturesRateLock key={key} />;
    case 'IconFeaturesRentersBundle':
      return <IconFeaturesRentersBundle key={key} />;
    case 'IconFeaturesRideshare':
      return <IconFeaturesRideshare key={key} />;
    case 'IconFeaturesRoadside':
      return <IconFeaturesRoadside key={key} />;
    case 'IconFeaturesSR2':
      return <IconFeaturesSR2 key={key} />;
  }
};
const FeatureIcons = props => {
  const icons = props.features.map((feature, index) =>
    getIcon(feature.icon, index)
  );
  return <div className="icons-container feature-icons">{icons}</div>;
};

FeatureIcons.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.number,
      name: PropTypes.string,
      icon: PropTypes.string
    })
  )
};

export default FeatureIcons;
