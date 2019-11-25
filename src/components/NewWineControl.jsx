import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewWineForm from './NewWineForm';
import Confirmation from './Confirmation';
import $ from 'jquery';

function NewWineControl(props) {
  const [confirmValues, setValues] = useState([]);

  function handleNewWineInfoForConfirm(newWineObj){
    setValues(newWineObj);
    $('#confirm').modal('show');
  }

  return (
    <div className='container'>
      <NewWineForm onNewWineCreation={handleNewWineInfoForConfirm}/>
      <Confirmation valuesToConfirm={confirmValues === null ? [{}] : confirmValues} onWineConfirmed={props.onWineConfirmed}/>
    </div>
  );
}


NewWineControl.propTypes = {
  onWineConfirmed: PropTypes.func
};
export default NewWineControl;