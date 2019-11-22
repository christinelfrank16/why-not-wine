import React from 'react';

function Confirmation(){
  return(
    <div className="modal fade" id="confirm" tabIndex="-1" role="dialog" aria-labelledby="confirmTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Please Confirm this Action</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
