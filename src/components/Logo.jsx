import React from 'react';
import Corks from '/assets/images/corks.jpg';

function Logo(){
  return(
    <div>
      <img src={Corks} alt='A large collection of corks'/>
      <h1>Why Not Wine</h1>
    </div>
  );
}

export default Logo;