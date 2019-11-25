import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdateAllFoodForm from './UpdateAllFoodForm';
import Confirmation from './Confirmation';
import $ from 'jquery';

function UpdateFoodControl() {
  const [confirmValues, setValues] = useState([]);

  function handleUpdateFoodInfoForConfirm(newFoodList) {
    setValues(newFoodList);
    $('#confirm').modal('show');
  }

  return (
    <div className='container'>
      <UpdateAllFoodForm onFoodUpdateSubmit={handleUpdateFoodInfoForConfirm}/>
      <Confirmation type='food' valuesToConfirm={confirmValues === null ? [{}] : confirmValues} onFoodListConfirmed={props.onFoodListConfirmed}/>
    </div>
  );
}

UpdateFoodControl.propTypes = {
  onFoodListConfirmed: PropTypes.func
}

export default UpdateFoodControl;