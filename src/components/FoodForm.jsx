import React from 'react';
import PropTypes from 'prop-types';

function FoodForm(props){
  var formStyle = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px'
  };
  var inputStyle = {
    color: 'white'
  };
  var buttonStyle = {
    marginRight: '10px'
  };
  return(
    <form style={formStyle}>
      <div className="form-group">
        <label style={inputStyle} htmlFor="name">Name</label>
        <input id="name" type="text" className="form-control" value={props.name}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="price">Price</label>
        <input id="price" type="text" className="form-control" value={props.price}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="image">Image Url</label>
        <input id="image" type="text" className="form-control" value={props.img}/>
      </div>
      <button style={buttonStyle} type="submit" className="btn btn-secondary">Update</button>
      <button type="button" className="btn btn-dark">Remove</button>
    </form>
  );
}

FoodForm.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default FoodForm;