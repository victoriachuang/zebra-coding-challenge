require('styles/ActionButton.scss');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconArrowDown, IconBoltWhite } from './Icons';
import { openLink } from '../helpers/urlHelpers';

class ActionButton extends Component {
  getButtonClass = buttonType =>
    (type => {
      // TODO: Rename class to reflect function, not appearance
      switch (type) {
        case 0:
        case 1:
          return 'blue-button';
        case 3:
          return 'orange-button';
      }
    })(buttonType);

  render() {
    return (
      <button
        className={`action-link ${this.getButtonClass(this.props.type)}`}
        onClick={() => {
          openLink(this.props.action.link);
        }}
      >
        {this.props.type === 3 ? <IconBoltWhite /> : <IconArrowDown />}
        {this.props.action.link_text || this.props.action.link_copy}
      </button>
    );
  }
}

ActionButton.propTypes = {
  type: PropTypes.number,
  action: PropTypes.shape({
    link: PropTypes.string,
    link_text: PropTypes.string,
    link_copy: PropTypes.string,
    type: PropTypes.string
  })
};

export default ActionButton;
