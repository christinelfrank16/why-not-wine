import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import WinePage from './WinePage';
import FoodPage from './FoodPage';
import Spacer from './Spacer';
// import UpdateFoodControl from './UpdateFoodControl';
// import AddWineControl from './AddWineControl';


function App() {
  var appStyle = {
    backgroundColor: '#520709'
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
        <Route exact path='/food' component={FoodPage} />
        {/* <Route exact path='/update-food' component={UpdateFoodControl} />
        <Route exact path='/wine/new-wine' component={AddWineControl} /> */}
        {/* <Route exact path='/' component={Home} />    >>>>>>> Detail view route? */}
      </Switch>
    </div>
  );
}

export default App;