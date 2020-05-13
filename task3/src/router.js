import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
//import {Router , Route , Link} from 'react-router';
import Login from './pages/login';
import Content from './pages/content';
 
export default class App extends React.Component {
render(){
return(
<Router >
<div>
<Route exact path="/" component={Login} />
<Route path="/page1" component={Content} />
</div>
</Router>
)
}
}