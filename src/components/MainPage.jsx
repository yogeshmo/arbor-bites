import React, { Component } from 'react';

import BackgroundPic from '../images/mainpage_splash.png'

const backgroundPicStyle = {
    height: "100vh",
    backgroundImage: "url(" + BackgroundPic + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

class MainPage extends Component {
    render() { 
        return (
            <div style={ backgroundPicStyle }>
            </div>
        );
    }
}
 
export default MainPage;