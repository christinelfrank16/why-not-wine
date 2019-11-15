import React from 'react';
import MenuContainer from './MenuContainer';
import FoodList from './FoodList';

function FoodPage() {
  var foodList = <FoodList />;
  return (
    <MenuContainer content={foodList} name='Food Menu' />
  );
}

export default FoodPage;