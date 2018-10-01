require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Card from './Card';
import SearchResultsHeader from './SearchResultsHeader';
import CustomValuesDropdown from './CustomValuesDropdown';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: {},
      sortOrder: 'rate'
    };

    fetch('../data/carrier_cards.json')
      .then(results => results.json())
      .then(data => {
        this.setState({ cardData: data });
      });
  }

  sortOptions = [
    { value: 'rate', displayedName: 'Price (ascending)', ascending: true },
    { value: 'stars', displayedName: 'Rating (descending)', ascending: false },
    { value: 'name', displayedName: 'Carrier name', ascending: true }
  ];

  changeSortOrder = sortOrder => {
    this.setState({ sortOrder });
  };

  sortCards = (cards, sortOrder) => {
    const { ascending } = this.sortOptions.find(
      option => option.value === sortOrder
    );
    // determines whether the sorting should be ascending or descending
    const ascendingMultiplier = ascending ? 1 : -1;
    return cards.sort((card1, card2) => {
      // null or undefined values should go to the bottom of the sorted list
      if (!card1[sortOrder]) {
        return 1;
      }
      if (!card2[sortOrder]) {
        return -1;
      }
      return card1[sortOrder] > card2[sortOrder]
        ? ascendingMultiplier
        : -1 * ascendingMultiplier;
    });
  };

  dropdownStyles = {
    container: { display: 'flex', marginLeft: 'auto' },
    label: { margin: 'auto 22px auto auto' },
    select: { margin: 'auto 0', height: '36px' }
  };

  render() {
    const { cardData, sortOrder } = this.state;
    return (
      <div className="content">
        <div className="content-container">
          {cardData.carrier_cards ? (
            <div>
              <div className="header">
                <SearchResultsHeader number={cardData.carriers_searched} />
                <CustomValuesDropdown
                  sortOptions={this.sortOptions}
                  onChange={this.changeSortOrder}
                  label="Sort by:"
                  style={this.dropdownStyles}
                />
              </div>
              <div className="cards-container">
                {this.sortCards(cardData.carrier_cards, sortOrder).map(
                  (card, index) => (
                    <Card cardData={card} topResult={index === 0} key={index} />
                  )
                )}
              </div>
            </div>
          ) : (
            <h1>Loading content</h1>
          )}
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {};

export default AppComponent;
