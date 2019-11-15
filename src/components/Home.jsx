import React from 'react';
import Logo from './Logo';
import Description from './Description';
import FeaturedWineCarousel from './FeaturedWineCarousel';

function Home(){
  return(
    <div>
      <Logo/>
      <Description />
      <FeaturedWineCarousel/>
    </div>
  );
}

export default Home;