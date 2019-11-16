import React from 'react';

function NewWineForm(){
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
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="type">Type</label>
          <input id="type" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="color">Color</label>
          <input id="color" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input id="price" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="container">Container Type</label>
          <select style={width} class="form-control" id="container">
            <option>Select</option>
            <option>Bottle</option>
            <option>Keg</option>
          </select>
        </div>
        <div className="form-group">
          <label for="quantity">Quanity</label>
          <input id="quantity" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="varietal">Varietal</label>
          <input id="varietal" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="origin">Origin</label>
          <input id="origin" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="profile">Tasting Profile</label>
          <textarea style={width} class="form-control" rows="3" id="profile"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Add to List</button>
      </form>
    </div>
  );
}
export default NewWineForm;