import React from 'react'
import { Layout, Menu, Breadcrumb,Row,Col } from 'antd';
import './index.css'
import {FileTextOutlined,EditOutlined} from '@ant-design/icons'
import {  Link } from 'react-router-dom';
const { Header, Content } = Layout;

class Home extends React.Component {
    state = {
        current: 'post',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };/* this.setState 方法修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。 */

    render() {
        return (<Layout>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                <Menu.Item key="post" icon={<FileTextOutlined />}>
                    帖子
                </Menu.Item>
                <Menu.Item key="out" icon={<EditOutlined />}>
                    <Link to="/Page" style={{color: 'rgb(235, 235, 235,0.65)', }}>发布</Link>
                </Menu.Item>
            </Menu>
            <Content><div className="Block">
                <div txt='1'><h2>Title 1</h2>Content1</div>
                <div txt='1'><h2>Title 2</h2>Content2</div>
                <div txt='1'><h2>Title 3</h2>Content3</div>
                <div txt='1'><h2>Title 4</h2>Content4</div>
                </div>
            </Content>
        </Layout>
        );
    }
}

export default Home;
