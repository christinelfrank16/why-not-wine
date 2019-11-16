import React from 'react';
import NewWineForm from './NewWineForm';
import Confirmation from './Confirmation';

function NewWineControl(){
  return (
    <div className='container'>
      <NewWineForm />
      <Confirmation />
    </div>
  );
}
export default NewWineControl;