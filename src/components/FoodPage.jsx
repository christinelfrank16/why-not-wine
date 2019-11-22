import React from 'react';
import PropTypes from 'prop-types';
import MenuContainer from './MenuContainer';
import FoodList from './FoodList';

function FoodPage(props) {
  var foodList = <FoodList isAdmin={props.isAdmin} foodList={props.foodList} />;
  return (
    <MenuContainer content={foodList} name='Food Menu' />
  );
}

FoodPage.propTypes = {
  isAdmin: PropTypes.bool,
  foodList: PropTypes.array
};

export default FoodPage;