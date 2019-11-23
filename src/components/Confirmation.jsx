import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
  function confirmValues(){
    let html = <h3>Is this correct?</h3>;
    props.valuesToConfirm.map((wineAndDetails) => {
      Object.keys(wineAndDetails).forEach((key) => {
        html += <p>{key} : {wineAndDetails[key]}</p>
      });
    });
    return html;
  }
  return(
    <div className="modal fade" id="confirm" show={props.showModal} role="dialog" aria-labelledby="confirmTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Please Confirm this Wine</h5>
            <button type="button" className="close" onClick={() => updateShowModal(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {confirmValues()}
            <button type="button" className="btn btn-secondary" onClick={() => updateShowModal(false)}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={() => onWineConfirmed(props.valuesToConfirm)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Confirmation.propTypes = {
  valuesToConfirm: PropTypes.array,
  showModal: PropTypes.bool,
  onWineConfirmed: PropTypes.func,
  updateShowModal: PropTypes.func
}

export default Confirmation;
