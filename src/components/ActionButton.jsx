require('styles/ActionButton.scss');

import React from 'react';
import PropTypes from 'prop-types';
import { IconArrowDown, IconBoltWhite } from './Icons';
import { openLink } from '../helpers/urlHelpers';

const buttonTypes = {
  0: 'blue-button',
  1: 'blue-button',
  2: 'no-button',
  3: 'orange-button'
};

export const noButtonType = 2;
const orangeButtonType = 3;

const ActionButton = props => (
  <button
    className={`action-link ${buttonTypes[props.type]}`}
    onClick={() => {
      openLink(props.action.link);
    }}
  >
    {props.type === orangeButtonType ? <IconBoltWhite /> : <IconArrowDown />}
    {props.action.link_text || props.action.link_copy}
  </button>
);

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
