import React from 'react';
import PropTypes from 'prop-types';
import FoodForm from './FoodForm';

function UpdateAllFoodForm(props){
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
  return(
    <div>
      <div style={text}>
        <h2>Update Food Menu</h2>
        <button type="button" className='btn btn-primary'>Save Changes</button>
      </div>
      {props.foodList.map((item) =>
        <FoodForm nameValue={item.name} priceValue={item.price} imgValue={item.img} key={item.id} idValue={item.id}/>
      )}
      <FoodForm nameValue={''} priceValue={''} imgValue={''} key={giveNextFoodId()} id={giveNextFoodId()} />
    </div>
  );
}

UpdateAllFoodForm.propTypes = {
  onFoodUpdateSubmit: PropTypes.func,
  foodList: PropTypes.array
}
export default UpdateAllFoodForm;