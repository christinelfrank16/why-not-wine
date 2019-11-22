import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import WinePage from './WinePage';
import FoodPage from './FoodPage';
import Spacer from './Spacer';
import Error404 from './Error404';
import WineDetails from './WineDetails';
import UpdateFoodControl from './UpdateFoodControl';
import NewWineControl from './NewWineControl';
import noir from '../assets/images/TJ-Petit-Reserve-Pinot-Noir.jpg';
import chard from '../assets/images/Beurre-Chardonnay.jpg';
import epicuro from '../assets/images/epicuro-mandura.jpg';
import CheesePlatter from '../assets/images/cheesePlatter.jpg';
import GoldfishBowl from '../assets/images/goldFishBowl.jpg';
import ComboPlate from '../assets/images/comboPlate.jpg';
import FruitPlatter from '../assets/images/fruitPlatter.jpg';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isAdmin: false,
      wines: [
        {
          id: '1',
          name: 'Petit Reserve Pinot Noir',
          type: 'Pinot Noir',
          color: 'red',
          price: '$7.99',
          container: 'bottle',
          amountLeft: '15 bottles'
        },
        {
          id: '2',
          name: 'Beurré Chardonnay',
          type: 'Chardonnay',
          color: 'white',
          price: '$6.99',
          container: 'bottle',
          amountLeft: '9 bottles'
        },
        {
          id: '3',
          name: 'Epicuro Primitivo di Manduria',
          type: 'Primitivo',
          color: 'red',
          price: '$8.99',
          container: 'keg',
          amountLeft: '24 oz'
        }
      ],
      wineDetails: [
        {
          id: '1',
          wineId: '1',
          varietal: 'Pinot',
          origin: 'Sonoma County’s Russian River Valley',
          profile: 'Light notes of toasted oak and juicy flavors of cherry and raspberry',
          food: {
            1: 2,
            2: 3
          },
          img: noir
        },
        {
          id: '2',
          wineId: '2',
          varietal: 'Chardonnay',
          origin: 'California',
          profile: 'Aromas of ripe pear, vanilla, and toasted baguettes skillfully play with its light, toasted-oak notes and creamy mouthfeel.',
          food: {
            1: 1,
            2: 2,
            3: 4
          },
          img: chard
        },
        {
          id: '3',
          wineId: '3',
          varietal: 'Zinfandel',
          origin: 'Apulia Region, Italy',
          profile: 'Begins with an aromatic nose full of sour cherry and berry flavors, licorice and vanilla plus some intriguing spice notes, and shows lots of sweet and sour cherry fruit wrapped up in a soft mouthfeel',
          food: {
            1: 1,
            2: 2,
            3: 3
          },
          img: epicuro
        }
      ],
      foodList: [
        {
          id: 1,
          name: 'Cheese Platter',
          price: '$5.99',
          img: CheesePlatter
        },
        {
          id: 2,
          name: 'Goldfish Bowl',
          price: '$3.49',
          img: GoldfishBowl
        },
        {
          id: 3,
          name: 'Combo Plate',
          price: '$7.25',
          img: ComboPlate
        },
        {
          id: 4,
          name: 'Fruit Platter',
          price: '$5.95',
          img: FruitPlatter
        }
      ]
    };
    this.handleUserPriviledgeUpdate = this.handleUserPriviledgeUpdate.bind(this);
  }

  handleUserPriviledgeUpdate(newValue){
    this.setState({ isAdmin: newValue.target.checked});
  }

  render(){
    var appStyle = {
      backgroundColor: '#520709',
      minHeight: '100vh'
    };
    var spaceHeight = {
      height: 56
    };
    return (
      <div style={appStyle}>
        <Header />
        <Spacer height={spaceHeight.height}/>
        <Switch>
          <Route exact path='/' render={() => <Home onUserPriviledgeUpdate={this.handleUserPriviledgeUpdate}/>}/>
          <Route exact path='/wine' component={WinePage} />
          <Route exact path='/wine/:id' component={WineDetails} />
          <Route exact path='/new-wine' component={NewWineControl} />
          <Route exact path='/food' component={FoodPage} />
          <Route exact path='/update-food' component={UpdateFoodControl} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;