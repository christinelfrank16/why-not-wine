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


function App() {
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
        <Route exact path='/' component={Home} />
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

export default App;