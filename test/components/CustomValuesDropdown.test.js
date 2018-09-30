/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomValuesDropdown from '../../src/components/CustomValuesDropdown';

Enzyme.configure({ adapter: new Adapter() });

let props;
let component;

describe('CustomValuesDropdown', () => {
  beforeEach(() => {
    props = {
      label: 'Test Label',
      onChange: jest.fn(),
      sortOptions: [
        {
          value: 'test-value-1',
          displayedName: 'Test value 1',
          ascending: true
        },
        {
          value: 'test-value-2',
          displayedName: 'Test value 2',
          ascending: false
        },
        {
          value: 'test-value-3',
          displayedName: 'Test value 3',
          ascending: true
        }
      ],
      style: {}
    };
    component = shallow(<CustomValuesDropdown {...props} />);
  });

  it('renders a select element', () => {
    expect(component.find('select')).toBeDefined();
  });

  it('renders the correct number of option elements', () => {
    expect(component.find('option').length).toEqual(props.sortOptions.length);
  });

  it('calls the onChange prop with the event target value when changed', () => {
    const selectElement = component.find('select');
    const event = { target: { value: 'asdf' } };
    selectElement.simulate('change', event);
    expect(props.onChange).toBeCalledWith(event.target.value);
  });

  describe('dropdown label', () => {
    it('renders a label if a the corresponding prop is provided', () => {
      expect(component.find('.dropdown-label').text()).toEqual(props.label);
    });

    it('does not render a label if there is no corresponding prop', () => {
      const noLabelProps = {
        onChange: jest.fn(),
        sortOptions: [
          {
            value: 'test-value-1',
            displayedName: 'Test value 1',
            ascending: true
          }
        ],
        style: {}
      };
      const noLabelComponent = shallow(
        <CustomValuesDropdown {...noLabelProps} />
      );
      expect(noLabelComponent.find('.dropdown-label').length).toEqual(0);
    });
  });
});
