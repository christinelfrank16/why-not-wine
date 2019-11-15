import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/wine' component={WineList} />
                <Route exact path='/food' component={FoodList} />
                <Route exact path='/update-food' component={UpdateFoodControl} />
                <Route exact path='/wine/new-wine' component={AddWineControl} />
                {/* <Route exact path='/' component={Home} />    >>>>>>> Detail view route? */}
            </Switch>
        </div>
    );
}

export default App;