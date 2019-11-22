import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WineItem from './WineItem';


function WineList(props) {
  var middle = {
    marginLeft: '20px'
  };
  
  function adminLink() {
    if (props.isAdmin) {
      return (
        <div style={middle}>
          <Link to='/new-wine'>Add A New Wine</Link>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      {adminLink()}
      {props.wineList.map((wine, index) => 
        <WineItem id={wine.id} name={wine.name} type={wine.type} color={wine.color} price={wine.price} container={wine.container} amountLeft={wine.amountLeft} isAdmin={props.isAdmin} key={index}/>
      )}
    </div>
  );
}

WineList.propTypes = {
  isAdmin: PropTypes.bool,
  wineList: PropTypes.array
};

export default WineList;