import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FoodItem from './FoodItem';

function WineDetails(props){
  console.log(props);
  const wineFoods = Object.keys(props.selectedWineDetails.food).map(function(key){
    const value = wine.food[key];
    return props.foodList.find((food) => value === food.id);
  });

  // Including grape varietals, origin, tasting profile, and suggested menu item(s) for pairing.
  var detailStyling = {
    backgroundColor: 'rgba(255,255,255,0.6)',
    margin: '20px 20px',
    minHeight: '100vh',
    borderRadius: '8px'
  };
  var topStyling = {
    textAlign: 'center',
    margin: '10px',
    maxHeight: '500px'
  };
  var colStyling = {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px'
  };
  var borders = {
    border: '3px solid #4a4a49'
  };
  var middle = {
    marginTop: 'auto',
    marginBottom: 'auto',
  };
  var lightBorder = {
    borderRight: '1px solid #4a4a49'
  };
  var flex = {
    display: 'flex',
    alignContent: 'stretch',
    width: '100%',
    margin: '0',
    alignItems: 'center'
  };
  var imgStyling = {
    maxHeight: '400px',
    width: 'auto'
  };
  var linkStyling = {
    padding: '30px',
    color: 'black',
  }
  return (
    <div style={detailStyling}>
      <Link style={linkStyling} to='/wine'>Back to Wine Listing</Link>
      <div style={topStyling}>
        <h2>{props.selectedWine.name}</h2>
        <h4>{props.selectedWineDetails.origin}</h4>
        <img style={imgStyling} src={props.selectedWineDetails.img} />
      </div>
      <div style={colStyling}>
        <div style={borders} className='row'>
          <div style={Object.assign(middle, lightBorder)} className='col-auto'>
            <div className='row'>
              <div className='col-auto'>
                <h6>Type</h6>
              </div>
              <div className='col'>
                {props.selectedWine.type}
              </div>
            </div>
            <div className='row'>
              <div className='col-auto'>
                <h6>Varietal</h6>
              </div>
              <div className='col'>
                {props.selectedWineDetails.varietal}
              </div>
            </div>
          </div>
          <div className='col'>
            <h6>Tasting Profile</h6>
            <p>{props.selectedWineDetails.profile}</p>
          </div>
        </div>
      </div>
      <h3 style={topStyling}>Suggested Pairings</h3>
      <div style={flex}>
        {wineFoods.map((item, index) => 
          <FoodItem name={item.name} price={item.price} img={item.img} key={index} />
        )}
      </div>
    </div>
  );
}

WineDetails.propTypes = {
  selectedWine: PropTypes.object,
  selectedWineDetails: PropTypes.object,
  foodList: PropTypes.array
}

export default WineDetails;