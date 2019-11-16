import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  var textStyle = {
    color: '#d1d1d1',
    height: '100vh',
    padding: '30px'
  };
  return (
    <div style={textStyle}>
      <h4>Attempted: {props.location.pathname}</h4>
      <br/>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}


Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;