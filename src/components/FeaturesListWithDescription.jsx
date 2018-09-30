require('../styles/FeaturesListWithDescription.scss');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DescriptionSection from './DescriptionSection';
import { IconChevronDown } from './Icons';

class FeaturesListWithDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse = collapsed => {
    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div className="clearfix full-width">
        <div
          className={`features-description-container ${
            collapsed ? 'collapsed' : 'expanded'
          }`}
        >
          {!collapsed && (
            <div>
              <DescriptionSection
                heading="Features:"
                description={this.props.featuresHtml}
                setDescriptionHtml
              />
              <DescriptionSection
                heading={`Why ${this.props.name}?`}
                description={this.props.detailBody}
              />
            </div>
          )}
        </div>
        <IconChevronDown
          className={`${collapsed ? 'toggle-collapse-icon' : 'rotated-x'}`}
          onClick={() => {
            this.toggleCollapse(collapsed);
          }}
        />
      </div>
    );
  }
}

FeaturesListWithDescription.propTypes = {
  featuresHtml: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  detailBody: PropTypes.string
};

export default FeaturesListWithDescription;
