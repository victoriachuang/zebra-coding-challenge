require('../styles/SearchResultsHeader.scss');

import React from 'react';
import PropTypes from 'prop-types';

const SearchResultsHeader = props => (
  <div className="search-results-header">
    <h2>
      You just compared <span className="bold-text">{props.number} rates</span>{' '}
      in 2 minutes!
    </h2>
  </div>
);

SearchResultsHeader.propTypes = {
  number: PropTypes.number
};

export default SearchResultsHeader;
