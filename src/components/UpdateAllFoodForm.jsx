import React from 'react';
import CheesePlatter from '../assets/images/cheesePlatter.jpg';
import GoldfishBowl from '../assets/images/goldFishBowl.jpg';
import ComboPlate from '../assets/images/comboPlate.jpg';
import FruitPlatter from '../assets/images/fruitPlatter.jpg';
import FoodForm from './FoodForm';

function UpdateAllFoodForm(){
  var foods = [
    {
      id: 1,
      name: 'Cheese Platter',
      price: '$5.99',
      img: CheesePlatter
    },
    {
      id: 2,
      name: 'Goldfish Bowl',
      price: '$3.49',
      img: GoldfishBowl
    },
    {
      id: 3,
      name: 'Combo Plate',
      price: '$7.25',
      img: ComboPlate
    },
    {
      id: 4,
      name: 'Fruit Platter',
      price: '$5.95',
      img: FruitPlatter
    }
  ];
  var text = {
    color: '#d1d1d1',
    marginTop: '20px',
    textAlign: 'center'
  };
  return(
    <div>
      <div style={text}>
        <h2>Update Food Menu</h2>
        <button type="button" className='btn btn-primary'>Save Changes</button>
      </div>
      {foods.map((item,index) =>
        <FoodForm name={item.name} price={item.price} img={item.img} key={index} />
      )}
      <FoodForm name={null} price={null} img={null} key={foods.length} />
    </div>
  );
}
export default UpdateAllFoodForm;