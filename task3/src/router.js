import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

export default class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}