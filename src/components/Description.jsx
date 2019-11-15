import React from 'react';
import PropTypes from 'prop-types';

function Description(props){
  var removeMargin = {
    margin: '0'
  }
  return (
    <p style={removeMargin}>{props.content}</p>
  );
}

Description.propTypes = {
  content: PropTypes.string
};

export default Description;
