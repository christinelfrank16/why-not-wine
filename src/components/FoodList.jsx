import React from 'react';
import FoodItem from './FoodItem';
import CheesePlatter from '../assets/images/cheesePlatter.jpg';
import GoldfishBowl from '../assets/images/goldFishBowl.jpg';
import ComboPlate from '../assets/images/comboPlate.jpg';
import FruitPlatter from '../assets/images/fruitPlatter.jpg';

function FoodList(){
  var foods = [
    {
      name: 'Cheese Platter',
      price: '$5.99',
      img: CheesePlatter
    },
    {
      name: 'Goldfish Bowl',
      price: '$3.49',
      img: GoldfishBowl
    },
    {
      name: 'Combo Plate',
      price: '$7.25',
      img: ComboPlate
    },
    {
      name: 'Fruit Platter',
      price: '$5.95',
      img: FruitPlatter
    }
  ];
  var list1 = foods.splice(0, Math.floor(foods.length/3));
  var list2 = foods.splice(0, Math.floor(foods.length/2));
  var flex = {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'stretch',
    width: '100%',
    margin: '0'
  };
  var rowStyle = {
    padding: '0 25px'
  }
  return(
    <div className='row' style={rowStyle}>
      <div className='col' style={flex}>
        {list1.map((item, index) => 
          <FoodItem name={item.name} price={item.price} img={item.img} key={index}/>
        )}
      </div>
      <div className='col' style={flex}>
        {list2.map((item, index) =>
          <FoodItem name={item.name} price={item.price} img={item.img} key={index} />
        )}
      </div>
      <div className='col' style={flex}>
        {foods.map((item, index) =>
          <FoodItem name={item.name} price={item.price} img={item.img} key={index} />
        )}
      </div>
    </div>
  );
}

export default FoodList;