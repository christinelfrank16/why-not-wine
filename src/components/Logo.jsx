import React from 'react';
import Corks from '../assets/images/corks.jpg';

function Logo(){
  var logoStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '15px',
    height: '300px'
  };
  var imgStyle = {
    width: '80%',
    height: 'inherit',
    objectFit: 'cover'
  };
  var nameStyle = {
    marginTop: '-200px',
    fontFamily: 'Fredericka the Great, cursive'
  };
  var size = {
    fontSize: '80px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '0 20px'
  };
  return(
    <div style={logoStyle}>
      <img src={Corks} style={imgStyle} alt='A large collection of corks'/>
      <div style={nameStyle}>
        <h1><span style={size}>Why Not Wine</span></h1>
      </div>
    </div>
  );
}

export default Logo;