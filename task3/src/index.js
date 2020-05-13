import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import './index.css';
import Login from './pages/login';/* 从文件中复用组件Login */
import Home from './pages/home';/* 从文件中复用组件Home */

class APP extends React.Component {/* 类APP继承自React.Component */
  constructor(props) {/* 组件的props是父组件向子组件传递的 */
    super(props);/* 通过super()来调用父类的构造函数，让子类得到this实例对象，不至于去改父类 */
    this.state = { value:0 };/* 该实例对象的state，仅为该组件内部维持的状态 */
    this.handleChange = this.handleChange.bind(this);/* React并没有对内部的函数，进行this绑定，
    所以如果想让函数在回调中保持正确的this，就要手动对需要的函数进行this绑定 */
  }

  handleChange() {
    this.setState={value:1}/* 只要调用这个函数，就让state内部的value的值变为true */
  }

  render() {/* 页面上显示的内容 */
    var value = this.state.value;/* 定义一个变量value，让它等于state内部的value的值，以便书写 */
    if (1) { return <Home />; }/* 如果此时state内部的value的值为true，则复用Home组件 */
    else {
      return (
        <Login onSumit={() => this.handleChange()} />);/* 如果此时state内部的value的值为false，则复用Login组件，
    并且如果表单中的确认按钮被点击，则立马调用handleChange修改state内部的value的值为true，让整个显示的页面被Home组件渲染
    怎么回事，不行的吗！ sadddddd*/
    }
  }
}
setInterval(APP, 1000);
ReactDOM.render(
  <React.StrictMode>{/* 严格模式，在代码出问题的时候会显示问题是什么，而不是渲染页面 */}
    <APP />{/* 显示APP的render的内容 */}
  </React.StrictMode>,
  document.getElementById('root')/* 将显示内容定位到html中 */
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();/* 这到底是什么东西，真的看不懂 */
