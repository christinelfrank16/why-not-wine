import React from 'react';
import Logo from './Logo';
import Description from './Description';
import FeaturedWineCarousel from './FeaturedWineCarousel';

function Home(){
  var description = {
    content: 'Relaxing in this busy world can be a stressful concept. This is what Why Not Wine is all about: we provide a space for you to come, relax and enjoy a favorite drink. We offer an assortment of wines to expore, ranging from exotic reds to local white ports. Come with friends or with your favorite book; this space is all about you.'
  };
  var descStyle = {
    width: '90%',
    backgroundColor: 'rgba(237, 226, 199, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px'
  }
  return(
    <div>
      <Logo/>
      <div style={descStyle}>
        <Description content={description.content} />
      </div>
      <FeaturedWineCarousel/>
    </div>
  );
}

export default Home;