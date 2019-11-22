import React from 'react';
import PropTypes from 'prop-types';

function NewWineForm(props){
  let _name = null;
  let _type = null;
  let _color = null;
  let _price = null;
  let _container = null;
  let _qty = null;
  let _varietal = null;
  let _origin = null;
  let _profile = null;

  function handleNewWineSubmission(event){
    event.preventDefault();
    props.onNewWineCreation(
      [
        {
          name: _name.value,
          type: _type.value,
          color: _color.value,
          price: _price.value,
          container: _container.value,
          amountLeft: _qty.value
        },
        {
          varietal: _varietal.value,
          origin: _origin.value,
          profile: _profile.value,
          food: []
        }
      ]);

    _name.value = '';
    _type.value = '';
    _color.value = '';
    _price.value = '';
    _qty.value = '';
    _varietal.value = '';
    _origin.value = '';
    _profile.value = '';

  }

  var text = {
    color: '#d1d1d1',
    marginTop: '20px'
  };
  var width = {
    width: '100%',
    borderRadius: '.25rem'
  };
  return(
    <div style={text}>
      <h2>New Wine Form</h2>
      <form onSubmit={handleNewWineSubmission}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="form-control" ref={(input) => {_name=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input id="type" type="text" className="form-control" ref={(input) => {_type=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input id="color" type="text" className="form-control" ref={(input) => {_color=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input id="price" type="text" className="form-control" ref={(input) => {_price=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="container">Container Type</label>
          <select style={width} className="form-control" id="container" ref={(input) => {_container=input;}}>
            <option>Select</option>
            <option>bottle</option>
            <option>keg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Starting Quanity</label>
          <input id="quantity" type="text" className="form-control" ref={(input) => {_qty=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="varietal">Varietal</label>
          <input id="varietal" type="text" className="form-control" ref={(input) => {_varietal=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input id="origin" type="text" className="form-control" ref={(input) => {_origin=input;}}/>
        </div>
        <div className="form-group">
          <label htmlFor="profile">Tasting Profile</label>
          <textarea style={width} className="form-control" rows="3" id="profile" ref={(input) => {_profile=input;}}/>
        </div>
        <button type="submit" className="btn btn-dark">Add to List</button>
      </form>
    </div>
  );
}

NewWineForm.propTypes = {
  onNewWineCreation: PropTypes.func
}

export default NewWineForm;