import React from 'react';
import MenuContainer from './MenuContainer';
import WineList from './WineList';

function WinePage(){
  var wineList = <WineList />;
  return(
    <MenuContainer content={wineList} name='Available Wines'/>
  );
}

export default WinePage;