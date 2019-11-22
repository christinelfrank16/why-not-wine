import React from 'react';
import PropTypes from 'prop-types';
import NewWineForm from './NewWineForm';
import Confirmation from './Confirmation';

function NewWineControl(props){
  return (
    <div className='container'>
      <NewWineForm />
      <Confirmation />
    </div>
  );
}

NewWineControl.propTypes = {
  
}
export default NewWineControl;