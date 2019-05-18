import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

import './App.css';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

class App extends React.Component{

    render(){
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Header />
                <>
                   <Route exact path={'/'} component={Home} />
                   <Route path={'/detail/:myId?'} component={Detail} />
                </>
            </BrowserRouter>
            </Provider>
        );
    }



}

export default App;
