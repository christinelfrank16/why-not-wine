import React from 'react';
import PropTypes from 'prop-types';
import MenuContainer from './MenuContainer';
import FoodList from './FoodList';

function FoodPage(props) {
  var foodList = <FoodList isAdmin={props.isAdmin}/>;
  return (
    <MenuContainer content={foodList} name='Food Menu' />
  );
}

FoodPage.propTypes = {
  isAdmin: PropTypes.bool
};

export default FoodPage;