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

  toggleCollapse = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    const { featuresHtml, name, detailBody } = this.props;
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
                description={featuresHtml}
                setDescriptionHtml
              />
              <DescriptionSection
                heading={`Why ${name}?`}
                description={detailBody}
              />
            </div>
          )}
        </div>
        <IconChevronDown
          className={`${collapsed ? 'toggle-collapse-icon' : 'rotated-x'}`}
          onClick={this.toggleCollapse}
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
