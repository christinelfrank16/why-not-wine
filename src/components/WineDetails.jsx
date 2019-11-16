import React from 'react';
import noir from '../assets/images/TJ-Petit-Reserve-Pinot-Noir.jpg';
import chard from '../assets/images/Beurre-Chardonnay.jpg';
import epicuro from '../assets/images/epicuro-mandura.jpg';

function WineDetails({match}){
  var wines = [
    {
      id: '1',
      name: 'Petit Reserve Pinot Noir',
      type: 'Pinot Noir',
      varietal: 'Pinot',
      origin: 'Sonoma County’s Russian River Valley',
      profile: 'Light notes of toasted oak and juicy flavors of cherry and raspberry',
      food: {
        1: '2',
        2: '3'
      },
      img: noir
    },
    {
      id: '2',
      name: 'Beurré Chardonnay',
      type: 'Chardonnay',
      varietal: 'Chardonnay',
      origin: 'California',
      profile: 'Aromas of ripe pear, vanilla, and toasted baguettes skillfully play with its light, toasted-oak notes and creamy mouthfeel.',
      food: {
        1: '1',
        2: '2',
        3: '4'
      },
      img: chard
    },
    {
      id: '3',
      name: 'Epicuro Primitivo di Manduria',
      type: 'Primitivo',
      varietal: 'Zinfandel',
      origin: 'Apulia Region, Italy',
      profile: 'Begins with an aromatic nose full of sour cherry and berry flavors, licorice and vanilla plus some intriguing spice notes, and shows lots of sweet and sour cherry fruit wrapped up in a soft mouthfeel',
      food: {
        1: '1',
        2: '2',
        3: '3'
      },
      img: epicuro
    }
  ];
  const wine = wines.find(({ id }) => id === match.params.id)

  // Including grape varietals, origin, tasting profile, and suggested menu item(s) for pairing.
  var detailStyling = {
    backgroundColor: 'rgba(255,255,255,0.6)',
    margin: '20px 20px',
    height: '100vh',
    borderRadius: '8px'
  };
  var imgStyling = {
    textAlign: 'center',
    margin: '10px'
  };
  var colStyling = {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px'
  };
  var borders = {
    border: '3px solid #4a4a49'
  };
  var middle = {
    marginTop: 'auto',
    marginBottom: 'auto',
  };
   var lightBorder = {
     borderRight: '1px solid #4a4a49'
   }
  return (
    <div style={detailStyling}>
      <div style={imgStyling}>
        <h2>{wine.name}</h2>
        <h4>{wine.origin}</h4>
        <img src={wine.img} />
      </div>
      <div style={colStyling}>
        <div style={borders} className='row'>
          <div style={Object.assign(middle, lightBorder)} className='col-auto'>
            <div className='row'>
              <div className='col-auto'>
                <h6>Type</h6>
              </div>
              <div className='col'>
                {wine.type}
              </div>
            </div>
            <div className='row'>
              <div className='col-auto'>
                <h6>Varietal</h6>
              </div>
              <div className='col'>
                {wine.varietal}
              </div>
            </div>
          </div>
          <div className='col'>
            <h6>Tasting Profile</h6>
            <p>{wine.profile}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineDetails;