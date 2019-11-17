import React from 'react';
import UpdateAllFoodForm from './UpdateAllFoodForm';
import Confirmation from './Confirmation';

function UpdateFoodControl() {
  return (
    <div className='container'>
      <UpdateAllFoodForm />
      <Confirmation />
    </div>
  );
}
export default UpdateFoodControl;