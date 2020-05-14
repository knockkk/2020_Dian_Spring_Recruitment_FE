import React from 'react';
import ReactDOM from 'react-dom';
import {  Route ,BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import './index.css';
import Login from './pages/login';/* 从文件中复用组件Login */
import Home from './pages/home';/* 从文件中复用组件Home */
import Page from './pages/page1';

class Routeeee extends React.Component{
    render(){
    return(
    <BrowserRouter>
    <div>
      <Route path="/" exact component={Login}/>
      <Route path='/Home' component={Home}/>
      <Route path='/Page' component={Page}/>
    </div></BrowserRouter>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Routeeee />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
