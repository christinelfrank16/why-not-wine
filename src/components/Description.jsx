import React from 'react';
import PropTypes from 'prop-types';

function Description(props){
  return (
    <p>{props.content}</p>
  );
}

Description.propTypes = {
  content: PropTypes.string
};

export default Description;
