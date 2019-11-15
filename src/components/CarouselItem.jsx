import React from 'react';
import PropTypes from 'prop-types';

function CarouselItem(props) {
  var heightStyle = {
    maxHeight: '600px',
    width: '100%',
    objectFit: 'contain'
  }
  return (
    <div className="carousel-item">
      <img style={heightStyle} className="d-block w-100" src={props.img} alt={props.alt} />
    </div>
  );
}

CarouselItem.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string
};

export default CarouselItem;