import React from 'react';
import WineItem from './WineItem';


function WineList() {
  var wines = [
    {
      name: 'Petit Reserve Pinot Noir',
      type: 'Pinot Noir',
      color: 'red',
      price: '$7.99',
      container: 'bottle',
      amountLeft: '15 bottles'
    },
    {
      name: 'Beurré Chardonnay',
      type: 'Chardonnay',
      color: 'white',
      price: '$6.99',
      container: 'bottle',
      amountLeft: '9 bottles'
    },
    {
      name: 'Epicuro Primitivo di Manduria',
      type: 'Primitivo',
      color: 'red',
      price: '$8.99',
      container: 'keg',
      amountLeft: '24 oz'
    }
  ];
  return (
    <div>
      {wines.map((wine, index) => 
        <WineItem name={wine.name} type={wine.type} color={wine.color} price={wine.price} container={wine.container} amountLeft={wine.amountLeft} key={index}/>
      )}
    </div>
  );
}

export default WineList;