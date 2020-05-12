import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import './index.css';
import Login from './pages/login';
import Home from './pages/home';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }

  handleSubmit() {
    this.setState({
      login: true,
    })
  }

  render() {
    if (this.state.login) {
      return (
        <Home />
      );
    } else {
      return (
        <Login onSubmit={() => this.handleSubmit()} />
      );
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
