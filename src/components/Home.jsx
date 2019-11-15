import React from 'react';
import Logo from './Logo';
import Description from './Description';
import FeaturedWineCarousel from './FeaturedWineCarousel';

function Home(){
  var description = {
    content: 'Relaxing in this busy world can be a stressful concept. This is what Why Not Wine is all about: we provide a space for you to come, relax and enjoy a favorite drink. We offer an assortment of wines to expore, ranging from exotic reds to local white ports. Come with friends or with your favorite book; this space is all about you.'
  }
  return(
    <div>
      <Logo/>
      <Description content={description.content}/>
      <FeaturedWineCarousel/>
    </div>
  );
}

export default Home;