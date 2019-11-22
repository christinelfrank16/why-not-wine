import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FoodItem from './FoodItem';

function FoodList(props){
  var foods = props.foodList.slice();
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
  };
  var middle = {
    marginLeft: '20px'
  };

  function adminLink() {
    if (props.isAdmin) {
      return (
        <div style={middle}>
          <Link to='/update-food'>Update the Food Menu</Link>
        </div>
      );
    } else {
      return null;
    }
  }
  return(
    <div>
      {adminLink()}
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
    </div>
  );
}

FoodList.propTypes = {
  isAdmin: PropTypes.bool,
  foodList: PropTypes.array
};

export default FoodList;