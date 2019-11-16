import React from 'react';
import { Link } from 'react-router-dom';
import WineItem from './WineItem';


function WineList() {
  var wines = [
    {
      id: '1',
      name: 'Petit Reserve Pinot Noir',
      type: 'Pinot Noir',
      color: 'red',
      price: '$7.99',
      container: 'bottle',
      amountLeft: '15 bottles'
    },
    {
      id: '2',
      name: 'Beurré Chardonnay',
      type: 'Chardonnay',
      color: 'white',
      price: '$6.99',
      container: 'bottle',
      amountLeft: '9 bottles'
    },
    {
      id: '3',
      name: 'Epicuro Primitivo di Manduria',
      type: 'Primitivo',
      color: 'red',
      price: '$8.99',
      container: 'keg',
      amountLeft: '24 oz'
    }
  ];
  var middle = {
    marginLeft: '20px'
  };
  return (
    <div>
      <div style={middle}>
        <Link to='/new-wine'>Add A New Wine</Link>
      </div>
      {wines.map((wine, index) => 
        <WineItem id={wine.id} name={wine.name} type={wine.type} color={wine.color} price={wine.price} container={wine.container} amountLeft={wine.amountLeft} key={index}/>
      )}
    </div>
  );
}

export default WineList;