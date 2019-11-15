import React from 'react';
import PropTypes from 'prop-types';
import SideImg from '../assets/images/wineListSideImg.jpg';

function MenuContainer(props){
  var imgStyling = {
    width: 'inherit',
    height: '100vh',
    objectFit: 'cover'
  };
  var imgColWidth = {
    maxWidth: '250px',
    padding: '0',
    margin: '0'
  };
  var otherColWidth = {
    padding: '0',
    margin: '0',
    minWidth: '95vh'
  };
  var titleSpanStyling = {
    color: '#d1d1d1',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '0 20px',
    borderRadius: '5px',
    fontSize: '50px'
  };
  var titleStyling = {
    marginLeft: '15%',
    marginTop: '10px',
    fontFamily: 'Fredericka the Great, cursive'
  }
  return(
    <div>
      <div className='row'>
        <div className='col' style={imgColWidth}>
          <img style={imgStyling} src={SideImg}/>
        </div>
        <div className='col-auto' style={otherColWidth}>
          {props.content}
        <h1 style={titleStyling}><span style={titleSpanStyling}>{props.name}</span></h1>
        </div>
      </div>
    </div>
  );
}

MenuContainer.propTypes = {
  content: PropTypes.object,
  name: PropTypes.string
};

export default MenuContainer;