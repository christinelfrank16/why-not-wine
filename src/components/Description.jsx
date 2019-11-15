import React from 'react';
import PropTypes from 'prop-types';

function Description(props){
  <p>{props.content}</p>;
}

Description.propTypes = {
  content: PropTypes.string
};

export default Description;
