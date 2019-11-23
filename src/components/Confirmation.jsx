import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
  function confirmValues(){
    if(props.valuesToConfirm != null){
      let html = <h3>Is this correct?</h3>;
      props.valuesToConfirm.map((wineAndDetails) => {
        Object.keys(wineAndDetails).forEach((key) => {
          html += <p>{key} : {wineAndDetails[key]}</p>
        });
      });
      return html;
    } else {
      return null;
    }
  }

  function confirmValues(passUpValues){
    if(passUpValues){
      props.onWineConfirmed(props.valuesToConfirm);
      props.updateShowModal(false);
    } else {
      props.updateShowModal(false);
    }
  }
  return(
    <div className="modal fade" id="confirm" tabIndex="-1" role="dialog" aria-labelledby="confirmTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Please Confirm this Wine</h5>
            <button type="button" className="close" onClick={() => confirmValues(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {confirmValues()}
            <button type="button" className="btn btn-secondary" onClick={() => confirmValues(false)}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={() => confirmValues(true)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Confirmation.propTypes = {
  valuesToConfirm: PropTypes.array,
  onWineConfirmed: PropTypes.func,
  updateShowModal: PropTypes.func
}

export default Confirmation;
