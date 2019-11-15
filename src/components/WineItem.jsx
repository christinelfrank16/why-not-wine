import React from 'react';
import PropTypes from 'prop-types';
import WhiteWineIcon from '../assets/images/wine-glass-icon-white.png';
import RedWineIcon from '../assets/images/wine-glass-icon-red.png';
import BottleIcon from '../assets/images/bottle-icon.png';
import KegIcon from '../assets/images/keg-icon.jpg';

function WineItem(props){
  var wineTypeicon = function(){
    if(props.color === 'white'){
      return WhiteWineIcon;
    } else {
      return RedWineIcon;
    }
  };
  var containerTypeicon = function () {
    if (props.container === 'keg') {
      return KegIcon;
    } else {
      return BottleIcon;
    }
  };
  var contTypeStyle = {
    float: 'right',
    textAlign: 'center'
  };
  var imgStyle = {
    width: '100px'
  };
  var cardStyle = {
    backgroundColor: 'rgba(255,255,255,0.6)',
    margin: '10px 20px'
  };
  var alignImgStyle = {
    marginTop: 'auto',
    marginBottom: 'auto'
  };
  var textStyling = {
    margin: '0'
  };
  return(
    <div className="card" style={cardStyle}>
      <div className="row no-gutter">
        <div className="col-auto" style={alignImgStyle}>
          <img src={wineTypeicon()} alt="Wine color icon" style={imgStyle}/>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className='row'>
              <div className='col-auto'>
                <p className="card-text">Type</p>
                <p className="card-text">Price</p>
                <p className="card-text">Container</p>
              </div>
              <div className='col'>
                <div style={contTypeStyle}>
                  <img src={containerTypeicon()} alt="Wine container icon" style={imgStyle} />
                  <p style={textStyling}>{props.amountLeft}</p>
                </div>
                <p className="card-text">{props.type}</p>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.container}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WineItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  container: PropTypes.string,
  amountLeft: PropTypes.string
};

export default WineItem;