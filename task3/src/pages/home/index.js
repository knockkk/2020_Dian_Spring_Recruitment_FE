import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Row, Col } from 'antd';
import { FileTextOutlined, EditOutlined } from '@ant-design/icons'
const { Header, Content } = Layout;

class ContentText extends React.Component {
  render() {
    return (
      <div className='content-title'>
        <h1>{this.props.value.title}</h1>
        <p className='time'>{this.props.value.createAt}</p>
        <p className='content'>{this.props.value.content}</p>
        <img src={this.props.value.avatar} alt="pic" className="picture"/>
        <p className="tocenter">{this.props.value.author}</p>
      </div>
    );
  }
}

class RowContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getcontent: [],
    };
    this.getContentFromURL('https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles');
  }

  getContentFromURL(url) {  // 获得json内容
    fetch(url, {method: 'get'})
    .then(res => res.json())
    .then(res => {
      const content = res;
      
      this.setState({
        getcontent: content,
      })
    })
    .catch(error => console.log('Error: ' + error));
  }

  generateTags() {  // 生成显示的标签
    var tags = [];
    const n = this.state.getcontent.length;
    var i = 0, key = 0;
    for (i = 0; i < n; i++) {
      const toValue = this.state.getcontent[key];
      tags.push(<Col span={6} key={key}><ContentText value={toValue} /></Col>);
      key++;
    }
    return tags
  }

  render() {
    const showtags = this.generateTags();
    return(
      <Row>
        {showtags}
      </Row>
    );
  }
}

// ==============================

ReactDOM.render(
  <Layout>
    {/* Header */}
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><FileTextOutlined />帖子</Menu.Item>
        <Menu.Item key="2"><EditOutlined />发布</Menu.Item>
      </Menu>
    </Header>
    {/* Content */}
    <Content className="site-layout" style={{ marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: '24px 80px', minHeight: 380 }}>
        <RowContent />
      </div>
    </Content>
  </Layout>,
  document.getElementById('root')
);