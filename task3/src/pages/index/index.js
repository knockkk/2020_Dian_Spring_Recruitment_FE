import React from 'react'
import { Menu, Row, Col } from 'antd';
import { FileTextOutlined, EditOutlined } from '@ant-design/icons';
import './index.css'
const style = { background: '#0092ff' };
export default class App extends React.Component {
  state = {
    current: 'mail'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className='index-container'>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
          theme="dark">
          <Menu.Item key="mail">
            <FileTextOutlined />
            帖子
          </Menu.Item>
          <Menu.Item key="app">
            <EditOutlined />
            发布
          </Menu.Item>
        </Menu>

        <div className='contentContainer'>
          <Row justify="center">
            {[1, 2, 3, 4].map(item => <Col className="gutter-row" span={5}>
    <div style={{marginBottom:'8px',fontWeight:500,fontSize:'22px',color:'#040404'}}>Title{item}</div>
    <div style={{marginBottom:'8px',fontSize:'12px'}}>2020-2-24 18:30</div>
    <div style={{fontSize:'17px'}}>content{item}</div>
            </Col>)}
          </Row>
        </div>

      </div>
    );
  }
}