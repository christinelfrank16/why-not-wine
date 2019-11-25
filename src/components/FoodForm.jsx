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
      <input hidden type='text' value={props.idValue} />
      <div className="form-group">
        <label style={inputStyle} htmlFor="name">Name</label>
        <input id="name" type="text" className="form-control" value={props.nameValue}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="price">Price</label>
        <input id="price" type="text" className="form-control" value={props.priceValue}/>
      </div>
      <div className="form-group">
        <label style={inputStyle} htmlFor="image">Image Url</label>
        <input id="image" type="text" className="form-control" value={props.imgValue}/>
      </div>
      <button style={buttonStyle} type="submit" className="btn btn-secondary">Update</button>
      <button type="button" className="btn btn-dark">Remove</button>
    </form>
  );
}

FoodForm.propTypes = {
  imgValue: PropTypes.string,
  nameValue: PropTypes.string,
  priceValue: PropTypes.string,
  idValue: PropTypes.number
};

export default FoodForm;