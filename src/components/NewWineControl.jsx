import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewWineForm from './NewWineForm';
import Confirmation from './Confirmation';
import $ from 'jquery';

function NewWineControl(props) {
  const [showModal, setShowModal] = useState(false);
  const [confirmValues, setValues] = useState(null);

  function handleNewWineInfoForConfirm(newWineObj){
    setValues(newWineObj);
    setShowModal(true);
    console.log($('confirm'));
    $('confirm').modal('show');
  }

  return (
    <div className='container'>
      <NewWineForm onNewWineCreation={handleNewWineInfoForConfirm}/>
      <Confirmation valuesToConfirm={confirmValues} updateShowModal={setShowModal} onWineConfirmed={props.onWineConfirmed}/>
    </div>
  );
}


NewWineControl.propTypes = {
  onWineConfirmed: PropTypes.func
}
export default NewWineControl;