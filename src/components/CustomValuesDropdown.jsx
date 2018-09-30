import React from 'react';
import PropTypes from 'prop-types';

const CustomValuesDropdown = props => (
  <div style={props.style.container}>
    {props.label && (
      <p className="dropdown-label" style={props.style.label}>
        {props.label}
      </p>
    )}
    <select
      onChange={event => {
        props.onChange(event.target.value);
      }}
      style={props.style.select}
    >
      {props.sortOptions.map((option, index) => (
        <option key={index} value={option.value} style={props.style.option}>
          {option.displayedName}
        </option>
      ))}
    </select>
  </div>
);

CustomValuesDropdown.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      displayedName: PropTypes.string,
      ascending: PropTypes.bool
    })
  ),
  style: PropTypes.object
};

CustomValuesDropdown.defaultProps = {
  onChange: () => {},
  sortOptions: [],
  style: PropTypes.shape({
    container: PropTypes.object,
    label: PropTypes.object,
    select: PropTypes.object,
    option: PropTypes.object
  })
};

export default CustomValuesDropdown;
