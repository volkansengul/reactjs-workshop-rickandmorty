import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

import './App.css';

class App extends React.Component{

    render(){
        return (
            <BrowserRouter>
                <Header />
                <>
                   <Route exact path={'/'} component={Home} />
                   <Route path={'/detail/:myId?'} component={Detail} />
                </>
            </BrowserRouter>
        );
    }



}

export default App;
