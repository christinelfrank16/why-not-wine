import React from 'react';
import PropTypes from 'prop-types';

function LoginSwitch(props){
  var margin = {
    margin: '10px'
  };
  var textAlign = {
    textAlign: 'center',
    color: '#d1d1d1'
  };
  return(
    <div style={textAlign}>
      <style jsx>{`
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

    .toggle {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        WebkitTransition: .4s;
        transition: .4s;
      }

    .toggle:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        WebkitTransition: .4s;
        transition: .4s;
      }

      input:checked + .toggle {
        background-color: #f3cc21;
      }

      input:focus + .toggle {
        box-shadow: 0 0 1px #f3cc21;
      }

      input:checked + .toggle:before {
        WebkitTransform: translateX(26px);
        MsTransform: translateX(26px);
        transform: translateX(26px);
      }
    `}</style>
      <h3>Admin Login</h3>
      <div className="form-check">
        <span style={margin}>Patron</span>
        <label className="switch" >
          <input id="hardware-value" type="checkbox" name="hardware" onChange={(event) => props.onUserPriviledgeUpdate(event)}/>
          <span className="slider toggle"></span>
        </label>
        <span style={margin}>Admin</span>
      </div>
    </div>
  );
}

LoginSwitch.propTypes = {
  onUserPriviledgeUpdate: PropTypes.func
};

export default LoginSwitch;