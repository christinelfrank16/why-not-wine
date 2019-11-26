import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FoodForm(props){
  const [foodObj, setFoodObj] = useState({id: props.idValue, name: props.nameValue, img: props.imgValue, price: props.priceValue});
  
  var formStyle = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px'
  };
  var inputStyle = {
    color: 'white'
  };
  var buttonStyle = {
    marginRight: '10px'
  };
  function onValueChange(event){
    var newObj = JSON.parse(JSON.stringify(foodObj));
    newObj[event.target.id] = event.target.value;
    setFoodObj(newObj);
  }
  return(
    <form style={formStyle}>
      <input hidden type='text' value={props.idValue} readOnly/>
      <div className="form-group">
        <label style={inputStyle} htmlFor="name">Name</label>
        <input id="name" type="text" className="form-control" value={foodObj.name} onChange={(event) => onValueChange(event)}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="price">Price</label>
        <input id="price" type="text" className="form-control" value={foodObj.price} onChange={(event) => onValueChange(event)}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="image">Image Url</label>
        <input id="image" type="text" className="form-control" value={foodObj.img} onChange={(event) => props.onValueChange(event, props.idValue)}/>
      </div>
      <button type="submit" className="btn btn-dark" onClick={() => props.onFoodRemovedClick(props.idValue)}>Remove</button>
    </form>
  );
}

FoodForm.propTypes = {
  imgValue: PropTypes.string,
  nameValue: PropTypes.string,
  priceValue: PropTypes.string,
  idValue: PropTypes.number,
  onFoodUpdateChange: PropTypes.func,
  onFoodRemovedClick: PropTypes.func
};

export default FoodForm;