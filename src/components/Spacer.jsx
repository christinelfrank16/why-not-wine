import React from 'react';
import PropTypes from 'prop-types';

function Spacer(prop){
  var heightStyle = {
    height: `${prop.height}px`
  };
  return(
    <div style={heightStyle}></div>
  );
}

Spacer.propTypes = {
  height: PropTypes.number
};

export default Spacer;