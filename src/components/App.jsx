import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Navigation'
import MainPage from './MainPage'
import RecipesPage from './RecipesPage'
import RestaurantsPage from './RestaurantsPage'
import StoresPage from './StoresPage'
import TipsPage from './TipsPage'

class App extends Component {
    render() { 
        return (
            <React.Fragment>
                <Router>
                    <Navigation />
                    <div className="mt-5">
                        <Switch>
                            <Route path="/" exact component={MainPage} />
                            <Route path="/recipes" component={RecipesPage} />
                            <Route path="/restaurants" component={RestaurantsPage} />
                            <Route path="/stores" component={StoresPage} />
                            <Route path="/tips" component={TipsPage} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}
 
export default App;