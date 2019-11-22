import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Description from './Description';
import FeaturedWineCarousel from './FeaturedWineCarousel';
import Spacer from './Spacer';
import LoginSwitch from './LoginSwitch';

function Home(props){
  var description = {
    content: 'Relaxing in this busy world can be a stressful concept. This is what Why Not Wine is all about: we provide a space for you to come, relax and enjoy a favorite drink. We offer an assortment of wines to expore, ranging from exotic reds to local white ports. Come with friends or with your favorite book; this space is all about you.'
  };
  var descStyle = {
    width: '35%',
    backgroundColor: 'rgba(237, 226, 199, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'block',
    float: 'right',
    marginRight: '20px',
    minWidth: '200px'
  };
  var txtColStyling = {
    marginTop: 'auto',
    marginBottom: 'auto'
  };
  var pictColStyling = {
    margin: '0',
    padding: '0'
  };
  var spaceHeight = {
    height: 200
  };
  var switchStyle = {
    float: 'right',
    marginRight: '30px',
  }
  return(
    <div>
      <Logo/>
      <div className='row'>
        <div style={txtColStyling} className='col-5'>
          <div style={switchStyle}>
            <LoginSwitch onUserPriviledgeUpdate={props.onUserPriviledgeUpdate}/>
          </div>
          <div style={descStyle}>
            <Description content={description.content} />
          </div>
        </div>
        <div style={pictColStyling} className='col-7'>
          <FeaturedWineCarousel/>
        </div>
      </div>
      <Spacer height={spaceHeight.height}/>
    </div>
  );
}

Home.propTypes = {
  onUserPriviledgeUpdate: PropTypes.func
}

export default Home;