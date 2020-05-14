import React from 'react'
import { Layout, Menu, Breadcrumb,Row,Col } from 'antd';
import './index.css'
import {FileTextOutlined,EditOutlined} from '@ant-design/icons'
import {  Link } from 'react-router-dom';
const { Header, Content } = Layout;

class Page extends React.Component {
    state = {
        current: 'out',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                <Menu.Item key="post" icon={<FileTextOutlined />}>
                <Link to="/Home" style={{color: 'rgb(235, 235, 235,0.65)', }}>帖子</Link>
        </Menu.Item>
                <Menu.Item key="out" icon={<EditOutlined />}>
                    发布
        </Menu.Item>
                
            </Menu>
        );
    }
}

export default Page;
