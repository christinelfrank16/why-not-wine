import React from 'react';
import PropTypes from 'prop-types';
import MenuContainer from './MenuContainer';
import WineList from './WineList';

function WinePage(props){
  var wineList = <WineList isAdmin={props.isAdmin}/>;
  return(
    <MenuContainer content={wineList} name='Available Wines'/>
  );
}

WinePage.propTypes = {
  isAdmin: PropTypes.bool
};

export default WinePage;