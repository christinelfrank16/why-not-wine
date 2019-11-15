import React from 'react';
import PropTypes from 'prop-types';

function FoodItem(props) {
  var userDetailsStyle = {
    paddingLeft: '5px',
    marginTop: '-55px'
  };
  var imgStyle = {
    width: '100%',
    height: 'auto'
  };
  var margin = {
    margin: '0',
    color: 'white'
  };
  var pictStyle = {
    padding: '8px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  var spanStyle = {
    background: 'rgba(0, 0, 0, 0.8)'
  };
  return (
    <div style={pictStyle}>
      <img src={props.img} style={imgStyle} />
      <div style={userDetailsStyle}>
        <h4 style={margin}><span style={spanStyle}>{props.name}</span></h4>
        <p style={margin}><span style={spanStyle}>{props.price}</span></p>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default FoodItem;