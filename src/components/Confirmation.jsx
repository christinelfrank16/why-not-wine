import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

function Confirmation(props){

  function confirmValues(){
    if(props.valuesToConfirm != null){
      $('.modal-body p').text('');
      props.valuesToConfirm.map((wineAndDetails) => {
        Object.keys(wineAndDetails).forEach((key) => {
          $('.modal-body p').append(`${key} : ${wineAndDetails[key].value}<br/>`);
        });
      });
    } else {
      return {};
    }
  }

  function passUpValues(doPassValues){
    if (doPassValues){
      var valuesToPass = [];
      props.valuesToConfirm.map((wineAndDetails) => {
        Object.keys(wineAndDetails).forEach((key) => {
          valuesToPass.push([key, wineAndDetails[key].value]);
          wineAndDetails[key].value = '';
        });
      });
      props.onWineConfirmed(valuesToPass);
      $('#confirm').modal('hide');
    } else {
      $('#confirm').modal('hide');
    }
  }

  return(
    <div className="modal fade" id="confirm" role="dialog" aria-labelledby="confirmTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Please Confirm this Wine</h5>
            <button type="button" className="close" onClick={() => passUpValues(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {confirmValues()}
            <p></p>
            <button type="button" className="btn btn-secondary" onClick={() => passUpValues(false)}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={() => passUpValues(true)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Confirmation.propTypes = {
  valuesToConfirm: PropTypes.obj,
  onWineConfirmed: PropTypes.func
};

export default Confirmation;
