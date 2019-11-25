import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      wineList: [
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
    this.wineDetailObjectHelper = this.wineDetailObjectHelper.bind(this);
    this.handleNewWineFormSubmit = this.handleNewWineFormSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  handleUserPriviledgeUpdate(newValue){
    this.setState({ isAdmin: newValue.target.checked});
  }

  routeChange(pathToGoTo) {
    let path = `${pathToGoTo}`;
    this.props.history.push(path);
  }

  handleNewWineFormSubmit(wineAndDetails){
    var newWine = {};
    var newDetails = {};
    wineAndDetails.forEach((keyValue) => {
      var keyList = Object.keys(this.state.wineList[0]);
      if(keyList.includes(keyValue[0])){
        newWine[keyValue[0]] = keyValue[1];
      } else {
        newDetails[keyValue[0]] = keyValue[1];
      }
    });
    if(newWine.container === 'bottle'){
      newWine.amountLeft += ' ' + newWine.container;
    } else {
      newWine.amountLeft += ' oz';
    }
    var wineWithMaxId = this.state.wineList.reduce((prev, curr) => {return Number(prev.id) > Number(curr.id) ? prev : curr; });
    newWine.id = (Number(wineWithMaxId.id) + 1).toString();
    this.state.wineList.push(newWine);

    var wineDetailsWithMaxId = this.state.wineDetails.reduce((prev, curr) => { return Number(prev.id) > Number(curr.id) ? prev : curr; });
    wineAndDetails[1].forEach((keyValue) => {
      newDetails[keyValue[0]] = keyValue[1];
    });
    newDetails.id = (Number(wineDetailsWithMaxId.id) +1).toString();
    newDetails.wineId = newWine.id;
    newDetails.food = [];
    this.state.wineDetails.push(newDetails);
    this.routeChange('/wine');
  }
  
  wineDetailObjectHelper(id){
    let wineObj = {};
    wineObj.wine = this.state.wineList.find((wine) => wine.id == id);
    wineObj.wineDetails = this.state.wineDetails.find((details) => details.wineId === id);
    wineObj.wineFoods = Object.keys(wineObj.wineDetails.food).map((key) => {
      const value = wineObj.wineDetails.food[key];
      return this.state.foodList.find((food) => value === food.id);
    });
    return wineObj;
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
          <Route exact path='/' render={() => <Home isAdmin={this.state.isAdmin} onUserPriviledgeUpdate={this.handleUserPriviledgeUpdate}/>}/>
          <Route exact path='/wine' render={() => <WinePage isAdmin={this.state.isAdmin} wineList={this.state.wineList} />}/>
          <Route exact path='/wine/:id' render={(routerProps) => <WineDetails selectedWine={this.wineDetailObjectHelper(routerProps.match.params.id).wine} selectedWineDetails={this.wineDetailObjectHelper(routerProps.match.params.id).wineDetails} wineFoods={this.wineDetailObjectHelper(routerProps.match.params.id).wineFoods} />} />
          <Route exact path='/new-wine'>
            {!this.state.isAdmin ? <Redirect to='/notAuthorized' /> : <NewWineControl onWineConfirmed={this.handleNewWineFormSubmit}/>}
          </Route>/>
          <Route exact path='/food' render={() => <FoodPage isAdmin={this.state.isAdmin} foodList={this.state.foodList} />} />
          <Route exact path='/update-food'>
            {!this.state.isAdmin ? <Redirect to='/notAuthorized' /> : <UpdateFoodControl />}  
          </Route>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default withRouter(App);