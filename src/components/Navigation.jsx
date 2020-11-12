import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import LogoPic from '../images/hamburger_logo.png'

class Navigation extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
                    <Link to="/">
                        <div className="navbar-brand">
                            <img src={ LogoPic } width="30" height="30" className="mr-2 align-top" alt="" />
                            <h className="font-weight-bold">ArborBites</h>
                        </div>
                    </Link>
                    <ul className="navbar-nav">
                        <Link to="/restaurants"><li className="nav-item nav-link mx-2">Restaurants</li></Link>
                        <Link to="/recipes"><li className="nav-item nav-link mx-2">Recipes</li></Link>
                        <Link to="/stores"><li className="nav-item nav-link mx-2">Stores</li></Link>
                        <Link to="/tips"><li className="nav-item nav-link mx-2">Tips</li></Link>
                    </ul>
                </div>
            </React.Fragment>

        );
    }
}
 
export default Navigation;