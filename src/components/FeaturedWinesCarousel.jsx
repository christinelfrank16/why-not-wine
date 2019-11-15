import React from 'react';
import CarouselItem from './CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import wine1 from '../assets/images/wine1.jpg';
import wine2 from '../assets/images/wine2.jpg';

function FeaturedWinesCarousel(){
  var items = [
    {
      src: wine2,
      alt: 'A red wine near some walnuts'
    }
  ];
  return (
    <div id="wineCarousel" className="carousel slide" data-ride="carousel" data-wrap="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={wine1} alt='Wine with food' />
        </div>
        {items.map((item, index) =>
          <CarouselItem img={item.src} alt={item.alt} key={index} />
        )}
      </div>
    </div>
  );
}

export default FeaturedWinesCarousel;