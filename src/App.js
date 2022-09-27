import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LogInScreen from './Components/LogInScreen.js';
import Detail from './Components/Home/Detail.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <LogInScreen />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
