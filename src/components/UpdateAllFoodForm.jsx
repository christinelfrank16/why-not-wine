import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodForm from './FoodForm';

function UpdateAllFoodForm(props){
  const [foodListCopy, updateFoodList] = useState(props.foodList.slice());
  var text = {
    color: '#d1d1d1',
    marginTop: '20px',
    textAlign: 'center'
  };
  function giveNextFoodId(){
    console.log(props);
    var maxFoodId = props.foodList.reduce((prev, curr) => {
      return prev.id > curr.id ? prev : curr;
    });
    return maxFoodId.id + 1;
  }
  function handleFoodRemoved(event, id){
    event.preventDefault();
    console.log(id);
    var updatedList = foodListCopy.filter((foodObj) => foodObj.id !== id);
    updateFoodList(updatedList);
  }

  function handleFoodUpdated(id, updatedProp){
    console.log(updatedProp);
    var existingObj = foodListCopy.find((foodObj) => id === foodObj.id);
    if(existingObj === null){
      var newFood = {};
      newFood[updatedProp.id] = updatedProp.value;
      console.log(newFood);
      var copyCurrentFoodList = foodListCopy.slice();
     // updateFoodList(copyCurrentFoodList.push(newFood));
    } else {
      existingObj[updatedProp.id] = updatedProp.value;
      var filteredList = foodListCopy.filter((foodObj) => existingObj.id !== foodObj.id);
      filteredList.push(existingObj);
      console.log(filteredList);
      updateFoodList(filteredList);
    }
  }
  return(
    <div>
      <div style={text}>
        <h2>Update Food Menu</h2>
        <button type="button" className='btn btn-primary'>Save Changes</button>
      </div>
      {foodListCopy.map((item) =>
        <FoodForm nameValue={item.name} priceValue={item.price} imgValue={item.img} key={item.id} idValue={item.id} onFoodRemovedClick={handleFoodRemoved}/>
      )}
      <FoodForm nameValue={''} priceValue={''} imgValue={''} key={giveNextFoodId()} id={giveNextFoodId()} onFoodRemovedClick={handleFoodRemoved}/>
    </div>
  );
}

UpdateAllFoodForm.propTypes = {
  onFoodUpdateSubmit: PropTypes.func,
  foodList: PropTypes.array
};
export default UpdateAllFoodForm;